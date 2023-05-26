import { describe, expect, it } from "vitest";
import { DrawerLeft } from "./DrawerLeft";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("<DrawerLeft />", () => {
  it("should be defined", () => {
    expect(DrawerLeft).toBeDefined();
  });
  it("should be render Title", () => {
    render(
      <MemoryRouter>
        <DrawerLeft />
      </MemoryRouter>
    );
    expect(screen.getByText("Drawer")).toBeInTheDocument();
  });
  it("should render classic navigation", () => {
    render(
      <MemoryRouter>
        <DrawerLeft />
      </MemoryRouter>
    );
    expect(screen.getByText("Timer")).toBeInTheDocument();
    expect(screen.getByText("Stats")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });
  it("should render Light Mode", () => {
    render(
      <MemoryRouter>
        <DrawerLeft />
      </MemoryRouter>
    );
    expect(screen.getByText("Light Mode")).toBeInTheDocument();
  });
  it("should render Dark Mode", async () => {
    render(
      <MemoryRouter>
        <DrawerLeft />
      </MemoryRouter>
    );
    expect(screen.queryByText("Dark Mode")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Light Mode"));
    await act(() => {
      expect(screen.getByText("Dark Mode")).toBeInTheDocument();
    });
  });
});
