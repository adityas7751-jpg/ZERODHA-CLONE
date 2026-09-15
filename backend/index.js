import "dotenv/config";
import { OAuth2Client } from "google-auth-library";
import crypto from "crypto";
import nodemailer from "nodemailer";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "jsonwebtoken";

import { HoldingsModel } from "./model/HoldingsModel.js";
import { PositionsModel } from "./model/PositionsModel.js";
import { OrdersModel } from "./model/OrdersModel.js";
import { UserModel } from "./model/UserModel.js";
import { CommodityModel } from "./model/CommodityModel.js";

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const GOOGLE_CLIENT_ID =
  "387397819051-k13julqeh54lmnhs3tqq7ghakdg17sm1.apps.googleusercontent.com";

const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

const emailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const app = express();


// =====================================
// MIDDLEWARE
// =====================================

app.use(cors());
app.use(bodyParser.json());


// =====================================
// HOME / TEST
// =====================================

app.get("/", (req, res) => {
  res.json({
    message: "Zerodha Clone Backend is running",
  });
});


// =====================================
// SIGNUP
// =====================================

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        error: "Username, email and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        error: "Password must be at least 6 characters",
      });
    }

    const existingUser = await UserModel.findOne({
      $or: [
        {
          username: username,
        },
        {
          email: email.toLowerCase(),
        },
      ],
    });

    if (existingUser) {
      return res.status(400).json({
        error: "Username or email already exists",
      });
    }

    const newUser = new UserModel({
      username: username,
      email: email.toLowerCase(),
      password: password,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",

      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log("Signup Error:", error);

    res.status(500).json({
      error: "Failed to register user",
      details: error.message,
    });
  }
});


// =====================================
// LOGIN
// =====================================

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        error: "Username and password are required",
      });
    }

    const user = await UserModel.findOne({
      username: username,
    });

    if (!user) {
      return res.status(401).json({
        error: "Invalid username or password",
      });
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        error: "Invalid username or password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login successful",

      token: token,

      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Login Error:", error);

    res.status(500).json({
      error: "Login failed",
      details: error.message,
    });
  }
});


// =====================================
// GOOGLE LOGIN
// =====================================

app.post("/auth/google", async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        error: "Google credential is required",
      });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload || !payload.email || payload.email_verified !== true) {
      return res.status(401).json({
        error: "Invalid Google account",
      });
    }

    const email = payload.email.toLowerCase();
    const googleName = payload.name || email.split("@")[0];

    let user = await UserModel.findOne({
      email: email,
    });

    if (!user) {
      let username = googleName
        .replace(/[^a-zA-Z0-9_]/g, "")
        .slice(0, 20);

      if (!username) {
        username = "googleuser";
      }

      const baseUsername = username;
      let counter = 1;

      while (
        await UserModel.findOne({
          username: username,
        })
      ) {
        username = `${baseUsername}${counter}`;
        counter++;
      }

      user = new UserModel({
        username: username,
        email: email,
        password: crypto.randomBytes(32).toString("hex"),
      });

      await user.save();
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Google login successful",

      token: token,

      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Google Login Error:", error);

    res.status(401).json({
      error: "Google login failed",
    });
  }
});


// =====================================
// FORGOT PASSWORD - SEND OTP
// =====================================

app.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        error: "Email is required",
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    const user = await UserModel.findOne({
      email: cleanEmail,
    });

    if (!user) {
      return res.status(404).json({
        error: "No account found with this email",
      });
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    user.resetOtp = otp;

    user.resetOtpExpiry = new Date(
      Date.now() + 10 * 60 * 1000
    );

    await user.save();

    await emailTransporter.sendMail({
      from: `"TradePilot" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "TradePilot Password Reset OTP",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 500px;
          margin: auto;
          padding: 30px;
          border: 1px solid #ddd;
          border-radius: 10px;
        ">

          <h2 style="margin-bottom: 10px;">
            TradePilot Password Reset
          </h2>

          <p>
            We received a request to reset your password.
          </p>

          <p>
            Your OTP is:
          </p>

          <div style="
            font-size: 32px;
            font-weight: bold;
            letter-spacing: 8px;
            padding: 20px;
            text-align: center;
            background: #f5f5f5;
            border-radius: 8px;
          ">
            ${otp}
          </div>

          <p>
            This OTP will expire in <b>10 minutes</b>.
          </p>

          <p>
            If you did not request a password reset,
            you can safely ignore this email.
          </p>

          <hr />

          <p style="color: #777;">
            TradePilot Security Team
          </p>

        </div>
      `,
    });

    res.status(200).json({
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.log("Forgot Password Error:", error);

    res.status(500).json({
      error: "Failed to send OTP",
    });
  }
});


// =====================================
// VERIFY OTP
// =====================================

app.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        error: "Email and OTP are required",
      });
    }

    const user = await UserModel.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    if (!user.resetOtp || !user.resetOtpExpiry) {
      return res.status(400).json({
        error: "OTP not found. Please request a new OTP",
      });
    }

    if (new Date() > user.resetOtpExpiry) {
      user.resetOtp = null;
      user.resetOtpExpiry = null;

      await user.save();

      return res.status(400).json({
        error: "OTP has expired. Please request a new OTP",
      });
    }

    if (user.resetOtp !== otp.toString()) {
      return res.status(400).json({
        error: "Invalid OTP",
      });
    }

    res.status(200).json({
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.log("OTP Verification Error:", error);

    res.status(500).json({
      error: "Failed to verify OTP",
    });
  }
});


// =====================================
// RESET PASSWORD
// =====================================

app.post("/reset-password", async (req, res) => {
  try {
    const {
      email,
      otp,
      newPassword,
    } = req.body;

    if (!email || !otp || !newPassword) {
      return res.status(400).json({
        error: "Email, OTP and new password are required",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        error: "Password must be at least 6 characters",
      });
    }

    const user = await UserModel.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    if (!user.resetOtp || !user.resetOtpExpiry) {
      return res.status(400).json({
        error: "OTP not found. Please request a new OTP",
      });
    }

    if (new Date() > user.resetOtpExpiry) {
      user.resetOtp = null;
      user.resetOtpExpiry = null;

      await user.save();

      return res.status(400).json({
        error: "OTP has expired. Please request a new OTP",
      });
    }

    if (user.resetOtp !== otp.toString()) {
      return res.status(400).json({
        error: "Invalid OTP",
      });
    }

    user.password = newPassword;
    user.resetOtp = null;
    user.resetOtpExpiry = null;

    await user.save();

    res.status(200).json({
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log("Reset Password Error:", error);

    res.status(500).json({
      error: "Failed to reset password",
    });
  }
});


// =====================================
// GET ALL HOLDINGS
// =====================================

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});

    res.status(200).json(allHoldings);
  } catch (error) {
    console.log("Holdings Error:", error);

    res.status(500).json({
      error: "Failed to fetch holdings",
    });
  }
});


// =====================================
// GET ALL POSITIONS
// =====================================

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});

    res.status(200).json(allPositions);
  } catch (error) {
    console.log("Positions Error:", error);

    res.status(500).json({
      error: "Failed to fetch positions",
    });
  }
});


// =====================================
// GET ALL ORDERS
// =====================================

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({}).sort({
      _id: -1,
    });

    res.status(200).json(allOrders);
  } catch (error) {
    console.log("Orders Error:", error);

    res.status(500).json({
      error: "Failed to fetch orders",
    });
  }
});


// =====================================
// NEW ORDER
// =====================================

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || qty === undefined || price === undefined || !mode) {
      return res.status(400).json({
        error: "name, qty, price and mode are required",
      });
    }

    const quantity = Number(qty);
    const orderPrice = Number(price);

    if (
      !Number.isFinite(quantity) ||
      !Number.isFinite(orderPrice) ||
      quantity <= 0 ||
      orderPrice < 0
    ) {
      return res.status(400).json({
        error: "Invalid quantity or price",
      });
    }

    if (mode !== "BUY" && mode !== "SELL") {
      return res.status(400).json({
        error: "Mode must be BUY or SELL",
      });
    }


    // =================================
    // BUY
    // =================================

    if (mode === "BUY") {
      const existingHolding = await HoldingsModel.findOne({
        name: name,
      });

      if (existingHolding) {
        const oldQty = Number(existingHolding.qty);
        const oldAvg = Number(existingHolding.avg);

        const newQty = oldQty + quantity;

        const newAvg =
          (oldQty * oldAvg + quantity * orderPrice) / newQty;

        existingHolding.qty = newQty;
        existingHolding.avg = Number(newAvg.toFixed(2));
        existingHolding.price = orderPrice;

        await existingHolding.save();

        console.log(`BUY: ${name} holding updated`);
      } else {
        const newHolding = new HoldingsModel({
          name: name,
          qty: quantity,
          avg: orderPrice,
          price: orderPrice,
          net: "0.00%",
          day: "0.00%",
          isLoss: false,
        });

        await newHolding.save();

        console.log(`BUY: ${name} new holding created`);
      }
    }


    // =================================
    // SELL
    // =================================

    if (mode === "SELL") {
      const existingHolding = await HoldingsModel.findOne({
        name: name,
      });

      if (!existingHolding) {
        return res.status(400).json({
          error: `You don't have any holding of ${name}`,
        });
      }

      const oldQty = Number(existingHolding.qty);

      if (quantity > oldQty) {
        return res.status(400).json({
          error: `You only have ${oldQty} quantity of ${name}`,
        });
      }

      const newQty = oldQty - quantity;

      if (newQty === 0) {
        await HoldingsModel.deleteOne({
          name: name,
        });

        console.log(`SELL: ${name} holding deleted`);
      } else {
        existingHolding.qty = newQty;
        existingHolding.price = orderPrice;

        await existingHolding.save();

        console.log(`SELL: ${name} quantity updated`);
      }
    }


    // =================================
    // SAVE ORDER
    // =================================

    const newOrder = new OrdersModel({
      name: name,
      qty: quantity,
      price: orderPrice,
      mode: mode,
    });

    await newOrder.save();

    console.log(
      `Order saved: ${mode} ${name} ${quantity}`
    );


    // =================================
    // RESPONSE
    // =================================

    res.status(200).json({
      message: `${mode} order saved successfully`,
      order: newOrder,
    });
  } catch (error) {
    console.log("Order Error:", error);

    res.status(500).json({
      error: "Failed to process order",
      details: error.message,
    });
  }
});


// =====================================
// OPEN COMMODITY ACCOUNT
// =====================================

app.post("/commodity/open", async (req, res) => {
  try {
    const { fullName, mobile, pan } = req.body;

    if (!fullName || !mobile || !pan) {
      return res.status(400).json({
        error:
          "Full name, mobile number and PAN number are required",
      });
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      return res.status(400).json({
        error: "Mobile number must be 10 digits",
      });
    }

    if (
      !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(
        pan.toUpperCase()
      )
    ) {
      return res.status(400).json({
        error: "Invalid PAN number",
      });
    }

    const existingAccount = await CommodityModel.findOne({
      mobile: mobile,
    });

    if (existingAccount) {
      return res.status(400).json({
        error: "Commodity account already exists",
      });
    }

    const commodityAccount = new CommodityModel({
      fullName: fullName.trim(),
      mobile: mobile,
      pan: pan.toUpperCase(),
      status: "OPEN",
    });

    await commodityAccount.save();

    console.log(
      "Commodity account created:",
      commodityAccount._id
    );

    res.status(201).json({
      message: "Commodity account opened successfully",

      account: {
        id: commodityAccount._id,
        fullName: commodityAccount.fullName,
        mobile: commodityAccount.mobile,
        pan: commodityAccount.pan,
        status: commodityAccount.status,
      },
    });
  } catch (error) {
    console.log(
      "Commodity Account Error:",
      error
    );

    res.status(500).json({
      error: "Failed to open commodity account",
      details: error.message,
    });
  }
});


// =====================================
// AI PORTFOLIO ASSISTANT
// =====================================

app.post("/ai/chat", async (req, res) => {
  try {
    const {
      message,
      history = [],
      portfolio = {},
    } = req.body;

    if (!message || !String(message).trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        error:
          "AI assistant is not configured. Add GEMINI_API_KEY to the backend .env file.",
      });
    }

    const safeHistory = Array.isArray(history)
      ? history
          .slice(-8)
          .filter(
            (item) =>
              item &&
              item.role &&
              item.text
          )
      : [];

    const portfolioContext = JSON.stringify({
      totalInvestment: portfolio.totalInvestment,
      currentValue: portfolio.currentValue,
      pnl: portfolio.pnl,
      pnlPercent: portfolio.pnlPercent,

      holdings: Array.isArray(portfolio.holdings)
        ? portfolio.holdings.slice(0, 15)
        : [],
    });

    const conversation = safeHistory
      .map(
        (item) =>
          `${
            item.role === "assistant"
              ? "Assistant"
              : "User"
          }: ${item.text}`
      )
      .join("\n");

    const prompt = `
You are the AI assistant inside a student-built stock trading dashboard called TradePilot, inspired by modern Indian brokerage apps.

Rules:
- Be concise, clear and useful.
- Explain investing concepts in simple language when asked.
- You can analyze the portfolio data supplied below, but do not claim to have live market prices unless they are explicitly supplied.
- Never guarantee profits or present personalized financial advice as certainty.
- For buy/sell questions, explain risks and factors to consider rather than giving a definitive instruction.
- If the user asks something unrelated, answer normally when safe.

Portfolio data:
${portfolioContext}

Previous conversation:
${conversation || "No previous conversation."}

User message:
${String(message).trim()}

Answer in plain text with short paragraphs or bullets when helpful.
`;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=" +
        encodeURIComponent(
          process.env.GEMINI_API_KEY
        ),
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],

          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 500,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("Gemini Error:", data);

      return res.status(502).json({
        error: "AI service could not answer right now",
      });
    }

    const text = data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join("")
      .trim();

    if (!text) {
      return res.status(502).json({
        error: "AI returned an empty response",
      });
    }

    res.status(200).json({
      reply: text,
    });
  } catch (error) {
    console.log(
      "AI Assistant Error:",
      error
    );

    res.status(500).json({
      error: "Failed to generate AI response",
    });
  }
});


// =====================================
// START SERVER
// =====================================

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB started!");

    app.listen(PORT, "0.0.0.0",() => {
      console.log(
        `App started on port ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(
      "MongoDB connection error:",
      error
    );
  });