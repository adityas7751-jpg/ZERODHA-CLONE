import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {

  test("renders hero image", () => {
    render(<Hero />);

    const heroImage = screen.getByAltText("Hero Image");

    expect(heroImage).toBeInTheDocument();

    expect(heroImage).toHaveAttribute(
      "src",
      "media/images/homeHero.png"
    );
  });

  test("renders heading", () => {
    render(<Hero />);

    expect(
      screen.getByText("Invest in everything")
    ).toBeInTheDocument();
  });

  test("renders description", () => {
    render(<Hero />);

    expect(
      screen.getByText(
        "Online platform to invest in stocks, derivatives, mutual funds, and more"
      )
    ).toBeInTheDocument();
  });

  test("renders Signup now button", () => {
    render(<Hero />);

    expect(
      screen.getByRole("button", {
        name: "Signup now",
      })
    ).toBeInTheDocument();
  });

});