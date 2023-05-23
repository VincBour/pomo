import { useCallback } from "react";
import { useClockStore } from "../../../store/useClockStore";
import { DisplaySlider } from "../../atomics/displaySlider/DisplaySlider";
import { DivMarginThree } from "../../atomics/div/DivMargin";

export const LongBreakSlider = () => {
  const longBreak = useClockStore((state) => state.long_break);
  const setLongBreak = useClockStore((state) => state.setLongBreak);
  const handleChange = useCallback(
    (_e: Event, newValue: number | number[]) => {
      setLongBreak(newValue as number);
    },
    [setLongBreak]
  );
  return (
    <DivMarginThree>
      <DisplaySlider
        label="Long break duration"
        defaultValue={longBreak}
        max={45}
        min={1}
        step={1}
        handleChange={handleChange}
        marks={[
          { value: 1, label: "1 min" },
          { value: 20, label: "20 min" },
          { value: 45, label: "45 min" },
        ]}
      />
    </DivMarginThree>
  );
};
