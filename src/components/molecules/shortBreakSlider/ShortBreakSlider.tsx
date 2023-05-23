import { useCallback } from "react";
import { useClockStore } from "../../../store/useClockStore";
import { DisplaySlider } from "../../atomics/displaySlider/DisplaySlider";
import { DivMarginThree } from "../../atomics/div/DivMargin";

export const ShortBreakSlider = () => {
  const shortBreak = useClockStore((state) => state.short_break);
  const setShortBreak = useClockStore((state) => state.setShortBreak);
  const handleChange = useCallback(
    (_e: Event, newValue: number | number[]) => {
      setShortBreak(newValue as number);
    },
    [setShortBreak]
  );
  return (
    <DivMarginThree>
      <DisplaySlider
        label="Short break duration"
        defaultValue={shortBreak}
        max={30}
        min={1}
        step={1}
        handleChange={handleChange}
        marks={[
          { value: 1, label: "1 min" },
          { value: 5, label: "5 min" },
          { value: 30, label: "30 min" },
        ]}
      />
    </DivMarginThree>
  );
};
