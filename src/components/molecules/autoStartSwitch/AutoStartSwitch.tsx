import { useCallback, SyntheticEvent } from "react";
import { useClockStore } from "../../../store/useClockStore";
import { DisplaySwitch } from "../../atomics/displaySwitch/DisplaySwitch";
import { DivMarginTwo } from "../../atomics/div/DivMargin";

export const AutoStartSwitch = () => {
  const isAutoStart = useClockStore((state) => state.isAutoStart);
  const setIsAutoStart = useClockStore((state) => state.setIsAutoStart);

  const handleChange = useCallback(
    (_event: SyntheticEvent<Element, Event>, checked: boolean) => {
      setIsAutoStart(checked);
    },
    [setIsAutoStart]
  );

  return (
    <DivMarginTwo>
      <DisplaySwitch
        label="AutoStart"
        checked={isAutoStart}
        handleChange={handleChange}
      />
    </DivMarginTwo>
  );
};
