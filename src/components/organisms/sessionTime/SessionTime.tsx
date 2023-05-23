import { Box, Typography } from "@mui/material";
import { useClockStore } from "../../../store/useClockStore";

export const SessionTime = () => {
  const rounds = useClockStore((state) => state.rounds);
  const currentRound = useClockStore((state) => state.current_round);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {currentRound} of {rounds} sessions
      </Typography>
    </Box>
  );
};
