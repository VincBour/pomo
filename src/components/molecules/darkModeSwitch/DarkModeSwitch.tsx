import { SyntheticEvent, useCallback } from "react";
import { DisplaySwitch } from "../../atomics/displaySwitch/DisplaySwitch";
import { DivMarginTwo } from "../../atomics/div/DivMargin";
import { useThemeStore } from "../../../store/useThemeStore";

export const DarkModeSwitch = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);

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
