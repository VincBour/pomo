import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useState, useCallback } from "react";
import { NavLink } from "../../components/atomics/navLink/NavLink";

export const DrawerLeft = () => {
  const [theme, setTheme] = useState("light");
  const onChangeTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 340,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 340,
          boxSizing: "border-box",
        },
      }}
    >
      <Typography variant="h1" id="title">
        Drawer
      </Typography>
      <List>
        {[
          { text: "Timer", icon: <AccessAlarmIcon />, to: "/timer" },
          { text: "Stats", icon: <AssessmentOutlinedIcon />, to: "/stats" },
          {
            text: "Settings",
            icon: <SettingsSuggestOutlinedIcon />,
            to: "/settings",
          },
        ].map((data) => (
          <ListItem key={data.text}>
            <ListItemButton component={NavLink} to={data.to}>
              <ListItemIcon>{data.icon}</ListItemIcon>
              <ListItemText primary={data.text} />
            </ListItemButton>
          </ListItem>
        ))}
        {theme === "light" ? (
          <ListItem>
            <ListItemButton onClick={onChangeTheme}>
              <ListItemIcon>{<LightModeOutlinedIcon />}</ListItemIcon>
              <ListItemText primary={"Light Mode"} />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem>
            <ListItemButton onClick={onChangeTheme}>
              <ListItemIcon>{<DarkModeOutlinedIcon />}</ListItemIcon>
              <ListItemText primary={"Dark Mode"} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Drawer>
  );
};
