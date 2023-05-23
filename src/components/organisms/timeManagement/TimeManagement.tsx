import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useClockStore } from "../../../store/useClockStore";
import { NavTime } from "../navTime/NavTime";
import { SessionTime } from "../sessionTime/SessionTime";
import { Clock } from "../clock/Cloc";

const timerClock = (
  remaining: number,
  time: number,
  setRemaining: React.Dispatch<React.SetStateAction<number>>,
  setProgress: React.Dispatch<React.SetStateAction<number>>
) => {
  const interval = setInterval(() => {
    if (remaining === 0) {
      clearInterval(interval);
      return;
    } else {
      setRemaining((remaining) => remaining - 1);
      setProgress((remaining / time) * 100);
    }
  }, 1000);
  return interval;
};

export const TimeManagement = () => {
  const getRemainingTime = useClockStore((state) => state.getRemainingTime);
  const current_time = useClockStore((state) => state.current_time);
  const isAutoStart = useClockStore((state) => state.isAutoStart);
  const [paused, setPaused] = useState(!isAutoStart);

  const time = getRemainingTime()[current_time];

  const [remaining, setRemaining] = useState(time);
  const [progress, setProgress] = useState((remaining / time) * 100);

  useEffect(() => {
    setRemaining(time);
    setProgress((time / time) * 100);
  }, [time]);

  useEffect(() => {
    let interval: NodeJS.Timer = {} as NodeJS.Timer;
    if (!paused) {
      interval = timerClock(remaining, time, setRemaining, setProgress);
    }
    return () => clearInterval(interval);
  }, [paused, remaining, time]);

  return (
    <Box>
      <Clock progress={progress} remaining={remaining} />
      <NavTime paused={paused} setPaused={setPaused} />
      <SessionTime />
    </Box>
  );
};
