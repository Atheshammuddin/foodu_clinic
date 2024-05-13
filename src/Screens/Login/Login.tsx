import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Button, Typography } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        minHeight: "100vh", // Centers the container vertically within the viewport
        bgcolor: "#FFFF",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 500, // Maximum width of 500px
          width: "100%", // Ensures it takes full width up to the maxWidth
          padding: 2, // Padding around the box
          // Optional border
          borderRadius: 2, // Optional border radius
          backgroundColor: "white", // Optional background color
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          DbWeb
        </Typography>

        <Box sx={{ mb: 2 }}>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <TextField
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="standard"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePassword}
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "black",
            color: "white",
            mb: 3,
            mt: 3,
            "&:hover": {
              bgcolor: "gray", // Gray background color on hover
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
