import { Box, CircularProgress, Typography } from "@mui/material";
import { useClockStore } from "../../../store/useClockStore";

interface ClockProps {
  remaining: number;
  progress: number;
}

export const Clock = ({ remaining, progress }: ClockProps) => {
  const currentTime = useClockStore((state) => state.current_time);
  return (
    <Box sx={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          left: 90,
          top: 150,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 800 }}>
          {getMinutes(remaining)} : {getSeconds(remaining)}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          {currentTime === "focus"
            ? "FOCUS"
            : currentTime === "short_break"
            ? "SHORT BREAK"
            : "LONG BREAK"}
        </Typography>
      </div>
      <CircularProgress
        variant="determinate"
        size={400}
        thickness={4}
        sx={{
          color: (theme) => theme.palette.secondary.light,
        }}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        value={progress}
        size={400}
        thickness={4}
        sx={{
          position: "absolute",
          left: 0,
        }}
      ></CircularProgress>
    </Box>
  );
};

const getSeconds = (time: number) => {
  const result = time % 60;
  if (result >= 10) {
    return result.toString();
  } else {
    return `0${result}`;
  }
};

const getMinutes = (time: number) => {
  const result = Math.floor(time / 60);
  if (result >= 10) {
    return result.toString();
  } else {
    return `0${result.toString()}`;
  }
};
