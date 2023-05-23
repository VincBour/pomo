import { useCallback } from "react";
import { useClockStore } from "../../../store/useClockStore";
import { DisplaySlider } from "../../atomics/displaySlider/DisplaySlider";
import { DivMarginThree } from "../../atomics/div/DivMargin";

export const WorkDurationSlider = () => {
  const focus = useClockStore((state) => state.focus);
  const setFocus = useClockStore((state) => state.setFocus);

  const handleChange = useCallback(
    (_e: Event, newValue: number | number[]) => {
      setFocus(newValue as number);
    },
    [setFocus]
  );
  return (
    <DivMarginThree>
      <DisplaySlider
        label="Work duration"
        defaultValue={focus}
        max={60}
        min={5}
        step={1}
        handleChange={handleChange}
        marks={[
          { value: 5, label: "5 min" },
          { value: 25, label: "25 min" },
          { value: 60, label: "60 min" },
        ]}
      />
    </DivMarginThree>
  );
};
