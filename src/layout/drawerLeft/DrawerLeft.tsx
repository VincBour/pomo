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
import { useCallback } from "react";
import { NavLink } from "../../components/atomics/navLink/NavLink";
import { useThemeStore } from "../../store/useThemeStore";

export const DrawerLeft = () => {
  const mode = useThemeStore((state) => state.mode);
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setMode);
  const onChangeTheme = useCallback(() => {
    setTheme();
  }, [setTheme]);
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
          <ListItem
            key={data.text}
            sx={{
              margin: "16px 16px 16px 8px",
              width: "auto",
              "&:hover": {
                borderRadius: "4px",
                backgroundColor:
                  mode === "dark"
                    ? "rgba(144, 202, 249, 0.28)"
                    : "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ListItemButton component={NavLink} to={data.to}>
              <ListItemIcon
                sx={{
                  alignItems: "center",
                  color:
                    mode === "light"
                      ? theme.palette.text.primary
                      : theme.palette.text.secondary,
                }}
              >
                {data.icon}
              </ListItemIcon>
              <ListItemText primary={data.text} />
            </ListItemButton>
          </ListItem>
        ))}
        {mode === "light" ? (
          <ListItem
            sx={{
              margin: "16px 16px 16px 8px",
              width: "auto",
              "&:hover": {
                borderRadius: "4px",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ListItemButton component={NavLink} onClick={onChangeTheme}>
              <ListItemIcon
                sx={{
                  alignItems: "center",
                }}
              >
                {
                  <LightModeOutlinedIcon
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  />
                }
              </ListItemIcon>
              <ListItemText
                primary={"Light Mode"}
                sx={{
                  color: theme.palette.text.primary,
                }}
              />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem
            sx={{
              margin: "16px 16px 16px 8px",
              width: "auto",
              "&:hover": {
                borderRadius: "4px",
                backgroundColor: "rgba(144, 202, 249, 0.28)",
              },
            }}
          >
            <ListItemButton component={NavLink} onClick={onChangeTheme}>
              <ListItemIcon>
                {
                  <DarkModeOutlinedIcon
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                  />
                }
              </ListItemIcon>
              <ListItemText
                primary={"Dark Mode"}
                sx={{
                  color: theme.palette.text.secondary,
                }}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Drawer>
  );
};
