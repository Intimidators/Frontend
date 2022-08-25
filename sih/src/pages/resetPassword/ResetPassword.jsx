import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";

import "../authCss/auth.css";

const theme = createTheme();

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("hello", data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              id="password"
              type="password"
              variant="outlined"
              label="Enter password"
              fullWidth
              required
              autoFocus
              margin="normal"
              error={errors.password}
              {...register("password", {
                required: "This field is required",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*['@','#','$','&','%']).{8,16}$/,
                  message:
                    "Password should consist of atleast one number, one uppercase ,one lowercase and one special character",
                },
                minLength: { value: 8, message: "Atleast 8 character" },
                maxLength: {
                  value: 16,
                  message: "Atmost 16 character",
                },
              })}
              helperText={errors?.password ? errors.password.message : ""}
            />
            <TextField
              id="re_password"
              type="password"
              variant="outlined"
              label=" Re-Enter password"
              fullWidth
              margin="normal"
              error={errors.password}
              {...register("re_password", {
                required: "This field is required",
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Your passwords do no match";
                  }
                },
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*['@','#','$','&','%']).{8,16}$/,
                  message:
                    "Password should consist of atleast one number, one uppercase ,one lowercase and one special character",
                },
                minLength: { value: 8, message: "Atleast 8 character" },
                maxLength: {
                  value: 16,
                  message: "Atmost 16 character",
                },
              })}
              helperText={errors?.re_password ? errors.re_password.message : ""}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(onSubmit)}
            >
              Change Password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
