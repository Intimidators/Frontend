import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "../authCss/auth.css";
import { useForm } from "react-hook-form";
import { doLoginIn } from "../../ApiService/userService";
import { Link, useLocation, useNavigate } from "react-router-dom";
const theme = createTheme();

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log("hello", data);
    try {
      const res = await doLoginIn(data);
      console.log("res", res);
      const user = { ...res.user, profilePic: res.profilePicURL };
      console.log(user);

      if (user.isTempPassword === 1) {
        navigate("/resetPassword", {
          state: {
            userId: user.userId,
            email: user.email,
          },
        });
      } else {
        navigate("/");
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      console.log(error);
    }
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
            Login in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              id="email"
              type="email"
              variant="outlined"
              label={"Email"}
              fullWidth
              required
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : ""}
              {...register("email", {
                required: "Requird field",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid Email",
                },
              })}
            />

            <TextField
              margin="normal"
              id="password"
              type="password"
              label={"Password"}
              fullWidth
              required
              error={errors.password}
              {...register("password", {
                required: "This field is required",
              })}
              helperText={errors.password ? errors.password.message : ""}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(onSubmit)}
            >
              Login In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to={"/forgotPassword"}>Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to={"/signUp"} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
