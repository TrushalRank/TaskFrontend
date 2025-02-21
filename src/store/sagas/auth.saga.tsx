import { call, put, takeLatest } from "redux-saga/effects";
import {
  signupRequest,
  signupSuccess,
  signupFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../slices/authSlice";
import { showToast } from "@/src/utils/toastHelper";
import { router } from "expo-router";
import api from "@/src/api/api";

// SIGNUP API CALL
function* signup(action: any) {
    try {
      const response = yield call(api.post, "/auth/signup", action.payload);
      if (response.status === 201) {
        yield put(signupSuccess(response.data));
        showToast("success", "Signup Successful", "Please check your email to verify your account.");
        router.push("/auth/login");
      }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "Signup failed";
        yield put(signupFailure(errorMessage));
        showToast("error", "Signup Failed", errorMessage);
    }
  }

// LOGIN API CALL
function* login(action: any) {
    try {
        const response = yield call(api.post, "/auth/login", action.payload);

        if (response.status === 200) {
          yield put(loginSuccess(response.data));
          console.log('response.data', response.data);
          api.defaults.headers.common['Authorization'] = response.data.token;
          showToast("success", "Login Successful", "Welcome back!");
          router.replace("/main/home");
        }
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || "Invalid email or password";
        yield put(loginFailure(errorMessage));
        showToast("error", "Login Failed", errorMessage);
      }
}

// WATCHER SAGA
export default function* authSaga() {
  yield takeLatest(signupRequest.type, signup);
  yield takeLatest(loginRequest.type, login);
}
