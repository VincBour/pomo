import { render, screen } from "@testing-library/react";
import { TimeManagement } from "./TimeManagement";

describe("TimeManagement", () => {
  it("should be defined", () => {
    expect(TimeManagement).toBeDefined();
  });
  it("should be render", () => {
    render(<TimeManagement />);
    expect(screen.getByText("clock")).toBeInTheDocument();
  });
});
