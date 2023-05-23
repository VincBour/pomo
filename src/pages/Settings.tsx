import {
  AutoStartSwitch,
  DarkModeSwitch,
  LongBreakSlider,
  NotificationSwitch,
  RoundSlider,
  ShortBreakSlider,
  WorkDurationSlider,
} from "../components/molecules";

export const Settings = () => {
  return (
    <>
      <WorkDurationSlider />
      <ShortBreakSlider />
      <LongBreakSlider />
      <RoundSlider />
      <NotificationSwitch />
      <AutoStartSwitch />
      <DarkModeSwitch />
    </>
  );
};
