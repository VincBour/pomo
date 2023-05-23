import { SyntheticEvent, useCallback } from "react";
import { useClockStore } from "../../../store/useClockStore";
import { DisplaySwitch } from "../../atomics/displaySwitch/DisplaySwitch";
import { DivMarginTwo } from "../../atomics/div/DivMargin";

export const DarkModeSwitch = () => {
  const isDarkMode = useClockStore((state) => state.isDarkMode);
  const setIsDarkMode = useClockStore((state) => state.setIsDarkMode);

  const handleChange = useCallback(
    (_event: SyntheticEvent<Element, Event>, checked: boolean) => {
      setIsDarkMode(checked);
    },
    [setIsDarkMode]
  );

  return (
    <DivMarginTwo>
      <DisplaySwitch
        label="Dark mode"
        checked={isDarkMode}
        handleChange={handleChange}
      />
    </DivMarginTwo>
  );
};
