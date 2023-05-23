import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import { SyntheticEvent } from "react";

interface DisplaySwitchProps {
  label: string;
  checked?: boolean;
  handleChange?: (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => void;
}

export const DisplaySwitch = ({
  label,
  checked,
  handleChange,
}: DisplaySwitchProps) => {
  return (
    <Box>
      <FormControlLabel
        checked={checked}
        onChange={handleChange}
        value={label}
        control={<Switch color="primary" />}
        label={label}
        labelPlacement="start"
      />
    </Box>
  );
};
