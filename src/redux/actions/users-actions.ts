import { API_BASE_URL } from '../../consts/index';
import getRequest from '../../utils/getRequest';
import { AppDispatch, TUser, TPost } from '../../types';

export const GET_USERS_REQUEST: 'GET_USERS_REQUEST' = 'GET_USERS_REQUEST';
export const GET_USERS_REQUEST_SUCCESS: 'GET_USERS_REQUEST_SUCCESS' = 'GET_USERS_REQUEST_SUCCESS';
export const GET_USERS_REQUEST_FAILED: 'GET_USERS_REQUEST_FAILED' = 'GET_USERS_REQUEST_FAILED';
export const GET_POSTS_REQUEST: 'GET_POSTS_REQUEST' = 'GET_POSTS_REQUEST';
export const GET_POSTS_REQUEST_SUCCESS: 'GET_POSTS_REQUEST_SUCCESS' = 'GET_POSTS_REQUEST_SUCCESS';
export const GET_POSTS_REQUEST_FAILED: 'GET_POSTS_REQUEST_FAILED' = 'GET_POSTS_REQUEST_FAILED';

export type TGetUsersRequest = {
  type: typeof GET_USERS_REQUEST;
};

export type TGetUsersRequestSuccess = {
  type: typeof GET_USERS_REQUEST_SUCCESS;
  users: Array<TUser>
};

export type TGetUsersRequestFailed = {
  type: typeof GET_USERS_REQUEST_FAILED;
};

export type TGetPostsRequest = {
  type: typeof GET_POSTS_REQUEST;
};

export type TGetPostsRequestSuccess = {
  type: typeof GET_POSTS_REQUEST_SUCCESS;
  posts: Array<TPost>
};

export type TGetPostsRequestFailed = {
  type: typeof GET_POSTS_REQUEST_FAILED;
};

export type TUsersActions = TGetUsersRequest |
TGetUsersRequestSuccess |
TGetUsersRequestFailed |
TGetPostsRequest |
TGetPostsRequestSuccess |
TGetPostsRequestFailed;

export const getUsersRequest = (): TGetUsersRequest => {
  return {
    type: GET_USERS_REQUEST,
  };
};

export const getUsersRequestSuccess = (users: Array<TUser>): TGetUsersRequestSuccess => {
  return {
    type: GET_USERS_REQUEST_SUCCESS,
    users,
  };
};

export const getUsersRequestFailed = (): TGetUsersRequestFailed => {
  return {
    type: GET_USERS_REQUEST_FAILED,
  };
};

export const getPostsRequest = (): TGetPostsRequest => {
  return {
    type: GET_POSTS_REQUEST,
  };
};

export const getPostsRequestSuccess = (posts: Array<TPost>): TGetPostsRequestSuccess => {
  return {
    type: GET_POSTS_REQUEST_SUCCESS,
    posts,
  };
};

export const getPostsRequestFailed = (): TGetPostsRequestFailed => {
  return {
    type: GET_POSTS_REQUEST_FAILED,
  };
};

export const getUsersThunk = () => async (dispatch: AppDispatch) => {
  dispatch(getUsersRequest());
  try {
    const users = await getRequest(`${API_BASE_URL}/users`);
    dispatch(getUsersRequestSuccess(users));
  } catch (e) {
    dispatch(getUsersRequestFailed());
  }
};

// export const getUsersThunk = createAsyncThunk()

export const getPostsThunk = () => async (dispatch: AppDispatch) => {
  dispatch(getPostsRequest());
  try {
    const users = await getRequest(`${API_BASE_URL}/posts`);
    dispatch(getPostsRequestSuccess(users));
  } catch (e) {
    dispatch(getPostsRequestFailed());
  }
};
