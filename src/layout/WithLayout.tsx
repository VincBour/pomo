import { Box } from "@mui/material";
import { DrawerLeft } from "./drawerLeft/DrawerLeft";
import { Authentication } from "../components/atomics/authentication/Authentication";

export const WithLayout = ({
  WrappedComponent,
}: {
  WrappedComponent: () => JSX.Element;
}) => {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <DrawerLeft />
      <Box sx={{ width: "100%", padding: "95px 0px 16px" }}>
        <Authentication />
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <WrappedComponent />
        </Box>
      </Box>
    </Box>
  );
};
