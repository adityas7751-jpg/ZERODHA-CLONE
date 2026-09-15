import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import SignUp from "../landing_page/signup/SignUp";

jest.mock("axios");

describe("SignUp Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.alert = jest.fn();
  });

  test("renders username input", () => {
    render(<SignUp />);

    expect(
      screen.getByPlaceholderText("Enter username")
    ).toBeInTheDocument();
  });

  test("renders email input", () => {
    render(<SignUp />);

    expect(
      screen.getByPlaceholderText("Enter email")
    ).toBeInTheDocument();
  });

  test("renders password input", () => {
    render(<SignUp />);

    expect(
      screen.getByPlaceholderText("Enter password")
    ).toBeInTheDocument();
  });

  test("renders Sign Up button", () => {
    render(<SignUp />);

    expect(
      screen.getByRole("button", {
        name: "Sign Up",
      })
    ).toBeInTheDocument();
  });

  test("shows validation when fields are empty", () => {
    render(<SignUp />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Sign Up",
      })
    );

    expect(window.alert).toHaveBeenCalledWith(
      "Please fill all fields"
    );

    expect(axios.post).not.toHaveBeenCalled();
  });

  test("updates form fields correctly", () => {
    render(<SignUp />);

    const usernameInput =
      screen.getByPlaceholderText("Enter username");

    const emailInput =
      screen.getByPlaceholderText("Enter email");

    const passwordInput =
      screen.getByPlaceholderText("Enter password");

    fireEvent.change(usernameInput, {
      target: {
        value: "testuser",
      },
    });

    fireEvent.change(emailInput, {
      target: {
        value: "test@example.com",
      },
    });

    fireEvent.change(passwordInput, {
      target: {
        value: "password123",
      },
    });

    expect(usernameInput).toHaveValue("testuser");
    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  test("successfully creates account", async () => {
    axios.post.mockResolvedValue({
      data: {
        message: "User registered successfully",
      },
    });

    render(<SignUp />);

    fireEvent.change(
      screen.getByPlaceholderText("Enter username"),
      {
        target: {
          value: "newtestuser",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter email"),
      {
        target: {
          value: "newtest@example.com",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter password"),
      {
        target: {
          value: "password123",
        },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Sign Up",
      })
    );

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:3002/signup",
        {
          username: "newtestuser",
          email: "newtest@example.com",
          password: "password123",
        }
      );
    });

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "User registered successfully"
      );
    });

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText("Enter username")
      ).toHaveValue("");
    });

    expect(
      screen.getByPlaceholderText("Enter email")
    ).toHaveValue("");

    expect(
      screen.getByPlaceholderText("Enter password")
    ).toHaveValue("");
  });

  test("handles signup API error", async () => {
    axios.post.mockRejectedValue({
      response: {
        data: {
          error: "Username already exists",
        },
      },
    });

    render(<SignUp />);

    fireEvent.change(
      screen.getByPlaceholderText("Enter username"),
      {
        target: {
          value: "existinguser",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter email"),
      {
        target: {
          value: "existing@example.com",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter password"),
      {
        target: {
          value: "password123",
        },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Sign Up",
      })
    );

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "Username already exists"
      );
    });
  });
});