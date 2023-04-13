// import axios from 'axios'

import { publicRequest } from "../allRequests";
import { loginStart, loginSuccess } from "./user/user"

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  const res = await publicRequest.post("store/login", user)
  const responseData = res;
  delete responseData.headers;
  dispatch(loginSuccess(responseData.data))
}

export const register = async (dispatch, user) => {
  dispatch(loginStart());
  const res = await publicRequest.post("stores", user)
  const responseData = res.data;
  delete responseData.headers;
  dispatch(loginSuccess(responseData))
}