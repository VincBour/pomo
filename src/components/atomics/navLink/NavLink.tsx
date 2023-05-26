import { forwardRef } from "react";
import { NavLink as NavLinkBase } from "react-router-dom";
import { useThemeStore } from "../../../store/useThemeStore";

export const NavLink = forwardRef<any, any>((props, ref) => {
  const theme = useThemeStore((state) => state.theme);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  return (
    <NavLinkBase
      ref={ref}
      {...props}
      className={props.activeClassName}
      style={{
        textDecoration: "none",
        display: "flex",
        marginLeft: "1.1rem",
        color: isDarkMode
          ? theme.palette.text.secondary
          : theme.palette.text.primary,
      }}
    />
  );
});
