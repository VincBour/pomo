import { Box, Button } from "@mui/material";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useCallback, useState } from "react";

export const Authentication = () => {
  const [isAuth, setIsAuth] = useState(false);

  const onChangeAuth = useCallback(() => {
    setIsAuth((isAuth) => !isAuth);
  }, [setIsAuth]);

  return (
    <Box
      sx={{ width: "95%", m: 3, display: "flex", justifyContent: "flex-end" }}
    >
      {isAuth ? (
        <SignOutButton onChangeAuth={onChangeAuth} />
      ) : (
        <SignInButton onChangeAuth={onChangeAuth} />
      )}
    </Box>
  );
};

interface SignButtonProps {
  onChangeAuth: () => void;
}

const SignInButton = ({ onChangeAuth }: SignButtonProps) => {
  return (
    <Button
      variant="outlined"
      startIcon={<LockOpenOutlinedIcon />}
      onClick={onChangeAuth}
    >
      SIGN IN
    </Button>
  );
};
const SignOutButton = ({ onChangeAuth }: SignButtonProps) => {
  return (
    <Button
      variant="outlined"
      startIcon={<LockOutlinedIcon />}
      onClick={onChangeAuth}
    >
      SIGN OUT
    </Button>
  );
};
