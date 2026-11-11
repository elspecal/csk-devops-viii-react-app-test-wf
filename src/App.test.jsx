import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the counter button", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });
    expect(button).toBeInTheDocument();
  });
});
