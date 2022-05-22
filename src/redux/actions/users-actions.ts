import { API_BASE_URL } from './../../consts/index';
import { getRequest } from './../../utils/getRequest';
import { AppDispatch, AppThunk } from "../../sevices/store";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const GET_USERS_REQUEST: 'GET_USERS_REQUEST' = 'GET_USERS_REQUEST';
export const GET_USERS_REQUEST_SUCCESS: 'GET_USERS_REQUEST_SUCCESS' = 'GET_USERS_REQUEST_SUCCESS';
export const GET_USERS_REQUEST_FAILED: 'GET_USERS_REQUEST_FAILED' = 'GET_USERS_REQUEST_FAILED';

export type TGetUsersRequest = {
  type: typeof GET_USERS_REQUEST;
};

export type TGetUsersRequestSuccess = {
  type: typeof GET_USERS_REQUEST_SUCCESS;
  users: any
};

export type TGetUsersRequestFailed = {
  type: typeof GET_USERS_REQUEST_FAILED;
};

export type TUsersActions = TGetUsersRequest |
  TGetUsersRequestSuccess |
  TGetUsersRequestFailed;

export const getUsersRequest = (): TGetUsersRequest => {
  return {
    type: GET_USERS_REQUEST
  }
}

export const getUsersRequestSuccess = (users: any): TGetUsersRequestSuccess => {
  return {
    type: GET_USERS_REQUEST_SUCCESS,
    users
  }
}

export const getUsersRequestFailed = (): TGetUsersRequestFailed => {
  return {
    type: GET_USERS_REQUEST_FAILED
  }
}

export const getUsersThunk = () => async (dispatch: AppDispatch) => {
  dispatch(getUsersRequest());
  try {
    const users = await getRequest(`${API_BASE_URL}/users`);
    dispatch(getUsersRequestSuccess(users));
  } catch(e) {
    dispatch(getUsersRequestFailed());
  }
}

// export const getUsersThunk = createAsyncThunk()