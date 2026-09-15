import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import Login from "../landing_page/login/Login";

jest.mock("axios");

describe("Login Component", () => {

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();

    delete window.location;
    window.location = {
      href: "",
    };

    window.alert = jest.fn();
  });

  test("renders username input", () => {
    render(<Login />);

    expect(
      screen.getByPlaceholderText("Enter username")
    ).toBeInTheDocument();
  });

  test("renders password input", () => {
    render(<Login />);

    expect(
      screen.getByPlaceholderText("Enter password")
    ).toBeInTheDocument();
  });

  test("renders Login button", () => {
    render(<Login />);

    expect(
      screen.getByRole("button", {
        name: "Login",
      })
    ).toBeInTheDocument();
  });

  test("shows validation alert when fields are empty", () => {
    render(<Login />);

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });

    fireEvent.click(loginButton);

    expect(window.alert).toHaveBeenCalledWith(
      "Please enter username and password"
    );

    expect(axios.post).not.toHaveBeenCalled();
  });

  test("shows validation alert when password is empty", () => {
    render(<Login />);

    const usernameInput =
      screen.getByPlaceholderText("Enter username");

    fireEvent.change(usernameInput, {
      target: {
        value: "testuser",
      },
    });

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });

    fireEvent.click(loginButton);

    expect(window.alert).toHaveBeenCalledWith(
      "Please enter username and password"
    );

    expect(axios.post).not.toHaveBeenCalled();
  });

  test("updates username and password fields", () => {
    render(<Login />);

    const usernameInput =
      screen.getByPlaceholderText("Enter username");

    const passwordInput =
      screen.getByPlaceholderText("Enter password");

    fireEvent.change(usernameInput, {
      target: {
        value: "testuser",
      },
    });

    fireEvent.change(passwordInput, {
      target: {
        value: "password123",
      },
    });

    expect(usernameInput).toHaveValue("testuser");
    expect(passwordInput).toHaveValue("password123");
  });

  test("successfully logs in and saves token", async () => {
    axios.post.mockResolvedValue({
      data: {
        token: "test-jwt-token",
      },
    });

    render(<Login />);

    const usernameInput =
      screen.getByPlaceholderText("Enter username");

    const passwordInput =
      screen.getByPlaceholderText("Enter password");

    fireEvent.change(usernameInput, {
      target: {
        value: "testuser",
      },
    });

    fireEvent.change(passwordInput, {
      target: {
        value: "password123",
      },
    });

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:3002/login",
        {
          username: "testuser",
          password: "password123",
        }
      );
    });

    expect(localStorage.getItem("token")).toBe(
      "test-jwt-token"
    );

    expect(window.alert).toHaveBeenCalledWith(
      "Login successful"
    );
  });

  test("handles login failure", async () => {
    axios.post.mockRejectedValue({
      response: {
        data: {
          error: "Invalid username or password",
        },
      },
    });

    render(<Login />);

    fireEvent.change(
      screen.getByPlaceholderText("Enter username"),
      {
        target: {
          value: "wronguser",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter password"),
      {
        target: {
          value: "wrongpassword",
        },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Login",
      })
    );

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "Invalid username or password"
      );
    });

    expect(
      localStorage.getItem("token")
    ).toBeNull();
  });

});