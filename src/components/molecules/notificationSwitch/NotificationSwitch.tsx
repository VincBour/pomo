import { useCallback, SyntheticEvent } from "react";
import { useClockStore } from "../../../store/useClockStore";
import { DisplaySwitch } from "../../atomics/displaySwitch/DisplaySwitch";
import { DivMarginTwo } from "../../atomics/div/DivMargin";

export const NotificationSwitch = () => {
  const isNotification = useClockStore((state) => state.isNotification);
  const setIsNotification = useClockStore((state) => state.setIsNotification);

  const handleChange = useCallback(
    (_event: SyntheticEvent<Element, Event>, checked: boolean) => {
      setIsNotification(checked);
    },
    [setIsNotification]
  );

  return (
    <DivMarginTwo>
      <DisplaySwitch
        label="Notifications"
        checked={isNotification}
        handleChange={handleChange}
      />
    </DivMarginTwo>
  );
};
