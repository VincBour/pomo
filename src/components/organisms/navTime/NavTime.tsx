import { Box, IconButton } from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { useClockStore } from "../../../store/useClockStore";
import { useCallback } from "react";

interface NavTimeProps {
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  paused: boolean;
}

export const NavTime = ({ paused, setPaused }: NavTimeProps) => {
  const setNextRound = useClockStore((state) => state.setNextRound);
  const resetSession = useClockStore((state) => state.resetSessions);
  const onClickStartStop = useCallback(() => {
    setPaused((paused) => !paused);
  }, [setPaused]);
  const onClickReset = useCallback(() => {
    resetSession();
    setPaused(true);
  }, [resetSession, setPaused]);
  const onClickNextRound = useCallback(() => {
    setNextRound();
    setPaused(true);
  }, [setNextRound, setPaused]);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
      <IconButton
        color="secondary"
        sx={{
          fontSize: "50px",
        }}
        onClick={onClickReset}
      >
        <RestartAltOutlinedIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        color="primary"
        onClick={onClickStartStop}
        sx={{
          fontSize: "80px",
        }}
      >
        {paused ? (
          <PlayCircleFilledWhiteOutlinedIcon fontSize="inherit" />
        ) : (
          <PauseCircleOutlineOutlinedIcon fontSize="inherit" />
        )}
      </IconButton>
      <IconButton
        color="secondary"
        sx={{
          fontSize: "50px",
        }}
        onClick={onClickNextRound}
      >
        <ArrowCircleRightOutlinedIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
};
