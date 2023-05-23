import { describe, expect, it } from "vitest";
import { Timer } from "./Timer";
import { render, screen } from "@testing-library/react";

describe("Name of the group", () => {
  it("should be defined", () => {
    expect(Timer).toBeDefined();
  });
  it("should be render Title", () => {
    render(<Timer />);
    expect(screen.findByText("Timer")).toBeTruthy();
  });
});
