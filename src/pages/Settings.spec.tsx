import { describe, expect, it } from "vitest";
import { Settings } from "./Settings";
import { render, screen } from "@testing-library/react";

describe("Name of the group", () => {
  it("should be defined", () => {
    expect(Settings).toBeDefined();
  });
  it("should be render Title", () => {
    render(<Settings />);
    expect(screen.findByText("Settings")).toBeTruthy();
  });
});
