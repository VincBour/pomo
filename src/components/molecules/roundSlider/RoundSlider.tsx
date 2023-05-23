import { useCallback } from "react";
import { useClockStore } from "../../../store/useClockStore";
import { DisplaySlider } from "../../atomics/displaySlider/DisplaySlider";
import { DivMarginThree } from "../../atomics/div/DivMargin";

export const RoundSlider = () => {
  const rounds = useClockStore((state) => state.rounds);
  const setRounds = useClockStore((state) => state.setRounds);

  const handleChange = useCallback(
    (_e: Event, newValue: number | number[]) => {
      setRounds(newValue as number);
    },
    [setRounds]
  );
  return (
    <DivMarginThree>
      <DisplaySlider
        label="Rounds"
        defaultValue={rounds}
        max={15}
        min={2}
        step={1}
        handleChange={handleChange}
        marks={[
          { value: 2, label: "2" },
          { value: 4, label: "4" },
          { value: 15, label: "15" },
        ]}
      />
    </DivMarginThree>
  );
};
