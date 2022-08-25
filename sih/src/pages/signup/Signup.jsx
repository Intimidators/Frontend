import React, { Fragment, useState } from "react";
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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { FormControl, FormHelperText } from "@material-ui/core";

import MuiPhoneNumber from "material-ui-phone-number";

import "antd/dist/antd.css";
import "../authCss/auth.css";

import "antd/dist/antd.css";
import "../authCss/auth.css";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { doSignUp } from "../../ApiService/userService";

const theme = createTheme();

const Signup = () => {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleOnChange = (value) => {
    setPhone(value);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    isValidPhone();
    const formData = {
      email: data.email,
      name: data.firstName + " " + data.lastName,
      password: data.password,
      confirmPassword: data.password,
      fatherName: data.fathersName,
      gender: data.gender,
      dateOfBirth: data.dob,
      religion: "Hindu",
      userName: data.userName,
      address: data.address,
      phoneNumber: phone,
    };
    console.log("hello", formData);
    doSignUp(formData);
  };
  const isValidPhone = () => {
    console.log(
      "hello",
      phone,
      phone === "" || phone === "+" || phone === "+91"
    );
    if (phone === "" || phone === "+" || phone === "+91") {
      console.log("hi");
      setPhoneError("This field is required");
    } else {
      setPhoneError("");
    }
  };
  const isValidDate = (val) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    let userDate = new Date(val);
    let userYear = userDate.getFullYear();
    let userMonth = userDate.getMonth();
    let userDay = userDate.getDate();

    let age = currentYear - userYear;
    let age_month = currentMonth - userMonth;
    let age_day = currentDay - userDay;

    if (age > 100) {
      return "Age cannot be more than 100 Years.Please enter correct age";
    }
    if (age_month < 0 || (age_month == 0 && age_day < 0)) {
      age = parseInt(age) - 1;
    }
    if ((age == 18 && age_month <= 0 && age_day <= 0) || age < 18) {
      return "Age should be more than 18 years.Please enter a valid Date of Birth";
    }
    return true;
  };
  return (
    <>
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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="firstname"
                    type="text"
                    variant="outlined"
                    label="Enter first name"
                    fullWidth
                    required
                    error={errors.firstName}
                    {...register("firstName", {
                      required: "This field is required",
                      minLength: { value: 3, message: "Atleast 3 character" },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Invalid Name",
                      },
                    })}
                    helperText={
                      errors.firstName ? errors.firstName.message : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="lastname"
                    type="text"
                    variant="outlined"
                    label="Enter last name"
                    fullWidth
                    required
                    error={errors.lastName}
                    {...register("lastName", {
                      required: "This field is required",
                      minLength: { value: 3, message: "Atleast 3 character" },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Invalid Name",
                      },
                    })}
                    helperText={errors.lastName ? errors.lastName.message : ""}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="username"
                    type="text"
                    variant="outlined"
                    label="Enter user name"
                    fullWidth
                    required
                    error={errors.userName}
                    {...register("userName", {
                      required: "This field is required",
                      minLength: { value: 3, message: "Atleast 3 character" },
                      pattern: {
                        value: /^[A-Za-z0-9]*$/i,
                        message:
                          "Username should consist of number and characters only",
                      },
                    })}
                    helperText={errors.userName ? errors.userName.message : ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="father__name"
                    type="text"
                    variant="outlined"
                    label="Enter father's name"
                    fullWidth
                    required
                    error={errors.fathersName}
                    {...register("fathersName", {
                      required: "This field is required",
                      minLength: { value: 3, message: "Atleast 3 character" },
                      pattern: {
                        value: /^[a-zA-Z ]*$/,
                        message: "Invalid Name",
                      },
                    })}
                    helperText={
                      errors.fathersName ? errors.fathersName.message : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    type="email"
                    variant="outlined"
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : ""}
                    label="Enter Email"
                    fullWidth
                    required
                    {...register("email", {
                      required: "Required field",
                      pattern: {
                        value:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Invalid Email",
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="date"
                    label="Date of Birth"
                    type="date"
                    // onChange={(event) => setDate(event.target.value)}
                    // defaultValue={date}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={errors.dob}
                    {...register("dob", {
                      required: true,
                      validate: isValidDate,
                    })}
                    helperText={errors.dob ? errors.dob.message : ""}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl
                      sx={{ m: 3 }}
                      error={errors.gender}
                      variant="outlined"
                    >
                      <FormLabel id="demo-error-radios">Genders</FormLabel>
                      <RadioGroup
                        row
                        name="gender"
                        {...register("gender", {
                          required: "This field is required",
                        })}
                      >
                        <FormControlLabel
                          value="male"
                          control={
                            <Radio
                              {...register("gender", {
                                required: "Choose your gender",
                              })}
                            />
                          }
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={
                            <Radio
                              {...register("gender", {
                                required: "Choose your gender",
                              })}
                            />
                          }
                          label="Female"
                        />
                        <FormControlLabel
                          value="other"
                          control={
                            <Radio
                              {...register("gender", {
                                required: "Choose your gender",
                              })}
                            />
                          }
                          label="Other"
                        />
                      </RadioGroup>
                      <FormHelperText>
                        {errors.gender ? errors.gender.message : ""}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <MuiPhoneNumber
                    fullWidth
                    defaultCountry={"in"}
                    onChange={handleOnChange}
                    variant="outlined"
                    helperText={phoneError === "" ? phoneError : ""}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="address"
                    label="Address"
                    type="test"
                    id="address"
                    autoComplete="address"
                    error={errors.address}
                    {...register("address", {
                      required: "This field is required",
                    })}
                    helperText={errors.address ? errors.address.message : ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    type="password"
                    variant="outlined"
                    label="Enter password"
                    fullWidth
                    required
                    error={errors.password}
                    {...register("password", {
                      required: "This field is required",
                      minLength: { value: 8, message: "Atleast 8 character" },
                      maxLength: {
                        value: 16,
                        message: "Atmost 16 character",
                      },
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*['@','#','$','&','%']).{8,15}$/,
                        message:
                          "Password should consist of atleast one number, one uppercase ,one lowercase and one special character",
                      },
                    })}
                    helperText={errors.password ? errors.password.message : ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="confirm__password"
                    type="password"
                    required
                    variant="outlined"
                    label="Confirm password"
                    fullWidth
                    error={errors.confirm__password}
                    {...register("confirm__password", {
                      required: true,
                      validate: (val) => {
                        if (watch("password") !== val) {
                          return "Your passwords do no match";
                        }
                      },
                    })}
                    helperText={
                      errors.confirm__password
                        ? errors.confirm__password.message
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Terms and condition"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit(onSubmit)}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={"/login"}>Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Signup;
