import { API_BASE_URL } from '../../consts/index';
import getRequest from '../../utils/getRequest';
import {
  AppDispatch,
  TUser,
  TPost,
  TComment,
} from '../../types';

export const GET_USERS_REQUEST: 'GET_USERS_REQUEST' = 'GET_USERS_REQUEST';
export const GET_USERS_REQUEST_SUCCESS: 'GET_USERS_REQUEST_SUCCESS' = 'GET_USERS_REQUEST_SUCCESS';
export const GET_USERS_REQUEST_FAILED: 'GET_USERS_REQUEST_FAILED' = 'GET_USERS_REQUEST_FAILED';
export const GET_POSTS_REQUEST: 'GET_POSTS_REQUEST' = 'GET_POSTS_REQUEST';
export const GET_POSTS_REQUEST_SUCCESS: 'GET_POSTS_REQUEST_SUCCESS' = 'GET_POSTS_REQUEST_SUCCESS';
export const GET_POSTS_REQUEST_FAILED: 'GET_POSTS_REQUEST_FAILED' = 'GET_POSTS_REQUEST_FAILED';
export const GET_COMMENTS_REQUEST: 'GET_COMMENTS_REQUEST' = 'GET_COMMENTS_REQUEST';
export const GET_COMMENTS_REQUEST_SUCCESS: 'GET_COMMENTS_REQUEST_SUCCESS' = 'GET_COMMENTS_REQUEST_SUCCESS';
export const GET_COMMENTS_REQUEST_FAILED: 'GET_COMMENTS_REQUEST_FAILED' = 'GET_COMMENTS_REQUEST_FAILED';
export const CLEAR_COMMENTS: 'CLEAR_COMMENTS' = 'CLEAR_COMMENTS';

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

export type TGetCommentsRequest = {
  type: typeof GET_COMMENTS_REQUEST;
};

export type TGetCommentsRequestSuccess = {
  type: typeof GET_COMMENTS_REQUEST_SUCCESS;
  comments: Array<TComment>
};

export type TGetCommentsRequestFailed = {
  type: typeof GET_COMMENTS_REQUEST_FAILED;
};

export type TClearComments = {
  type: typeof CLEAR_COMMENTS;
};

export type TUsersActions = TGetUsersRequest |
TGetUsersRequestSuccess |
TGetUsersRequestFailed |
TGetPostsRequest |
TGetPostsRequestSuccess |
TGetPostsRequestFailed |
TGetCommentsRequest |
TGetCommentsRequestSuccess |
TGetCommentsRequestFailed |
TClearComments;

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

export const getCommentsRequest = (): TGetCommentsRequest => {
  return {
    type: GET_COMMENTS_REQUEST,
  };
};

export const getCommentsRequestSuccess = (
  comments: Array<TComment>,
): TGetCommentsRequestSuccess => {
  return {
    type: GET_COMMENTS_REQUEST_SUCCESS,
    comments,
  };
};

export const getCommentsRequestFailed = (): TGetCommentsRequestFailed => {
  return {
    type: GET_COMMENTS_REQUEST_FAILED,
  };
};

export const clearComments = (): TClearComments => {
  return {
    type: CLEAR_COMMENTS,
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
    const posts = await getRequest(`${API_BASE_URL}/posts`);
    dispatch(getPostsRequestSuccess(posts));
  } catch (e) {
    dispatch(getPostsRequestFailed());
  }
};

export const getCommentsThunk = (post: string) => async (dispatch: AppDispatch) => {
  dispatch(getCommentsRequest());
  try {
    const comments = await getRequest(`${API_BASE_URL}/posts/${post}/comments`);
    dispatch(getCommentsRequestSuccess(comments));
  } catch (e) {
    dispatch(getCommentsRequestFailed());
  }
};
