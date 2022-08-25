import axios from "axios";
import config from "./apiPath";

export const doSignUp = async (data) => {
  try {
    const res = await axios.post(config.server.path + config.api.signUp, data);
    console.log(res, "res");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const doLoginIn = async (data) => {
  try {
    const res = await axios.post(config.server.path + config.api.login, data);
    console.log(res.data, "res");
    return res.data
  } catch (error) {
    console.log(error);
  }
};

export const doForgotPassword = async (data) => {
  try {
    const res = await axios.post(config.server.path + config.api.forgotpassword, data);
    console.log(res.data, "res");
    return res.data
  } catch (error) {
    console.log(error);
  }
};

export const doResetPassword = async (data) => {
  try {
    const res = await axios.post(config.server.path + config.api.updatePassword, data);
    console.log(res.data, "res");
    return res.data
  } catch (error) {
    console.log(error);
  }
};
