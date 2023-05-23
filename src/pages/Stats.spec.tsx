import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Stats } from "./Stats";

describe("Name of the group", () => {
  it("should be defined", () => {
    expect(Stats).toBeDefined();
  });
  it("should be render Title", () => {
    render(<Stats />);
    expect(screen.findByText("Stats")).toBeTruthy();
  });
});
