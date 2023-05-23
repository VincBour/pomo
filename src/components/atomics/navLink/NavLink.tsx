import { forwardRef } from "react";
import { NavLink as NavLinkBase } from "react-router-dom";

export const NavLink = forwardRef<any, any>((props, ref) => (
  <NavLinkBase
    ref={ref}
    {...props}
    className={props.activeClassName}
    style={{
      textDecoration: "none",
      display: "flex",
      marginLeft: "1.1rem",
    }}
  />
));
