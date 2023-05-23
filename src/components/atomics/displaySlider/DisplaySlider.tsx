import { Box, Slider, Typography, styled } from "@mui/material";

export interface DisplaySliderProps {
  label: string;
  defaultValue: number;
  step: number;
  min: number;
  max: number;
  marks?: { value: number; label: string }[];
  handleChange?: (event: Event, newValue: number | number[]) => void;
}

function valueText(value: number) {
  return `${value} min`;
}

const TimerSlider = styled(Slider)(({ theme }) => ({
  // height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: theme.palette.primary.main,
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));

export const DisplaySlider = ({
  label,
  defaultValue,
  step,
  min,
  max,
  marks,
  handleChange,
}: DisplaySliderProps) => {
  return (
    <Box sx={{ width: 300 }}>
      <Typography>{label}</Typography>
      <TimerSlider
        aria-label={label}
        getAriaValueText={valueText}
        defaultValue={defaultValue}
        step={step}
        marks={marks}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        onChange={handleChange}
      />
    </Box>
  );
};
