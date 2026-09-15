const mongoose = require("mongoose");

const CommoditySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    pan: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    status: {
      type: String,
      default: "OPEN",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

const CommodityModel = mongoose.model(
  "CommodityAccount",
  CommoditySchema
);

module.exports = { CommodityModel };