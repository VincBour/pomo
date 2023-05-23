import { render } from "@testing-library/react";
import { DisplaySlider } from "./DisplaySlider";

describe("DisplaySlider", () => {
  it("should be defined", () => {
    expect(DisplaySlider).toBeDefined();
  });
  it("should be return min value", () => {
    render(
      <DisplaySlider
        label="Work duration"
        defaultValue={5}
        max={60}
        min={5}
        step={55}
      />
    );
  });
});
