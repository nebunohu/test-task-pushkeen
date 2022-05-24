import { API_BASE_URL } from '../../consts/index';
import { AppDispatch, TComment } from '../../types/index';
import getRequest from '../../utils/getRequest';
import postRequest from '../../utils/postRequest';

export const GET_COMMENTS_REQUEST: 'GET_COMMENTS_REQUEST' = 'GET_COMMENTS_REQUEST';
export const GET_COMMENTS_REQUEST_SUCCESS: 'GET_COMMENTS_REQUEST_SUCCESS' = 'GET_COMMENTS_REQUEST_SUCCESS';
export const GET_COMMENTS_REQUEST_FAILED: 'GET_COMMENTS_REQUEST_FAILED' = 'GET_COMMENTS_REQUEST_FAILED';
export const CLEAR_COMMENTS: 'CLEAR_COMMENTS' = 'CLEAR_COMMENTS';
export const POST_COMMENT_REQUEST: 'POST_COMMENT_REQUEST' = 'POST_COMMENT_REQUEST';
export const POST_COMMENT_REQUEST_SUCCESS: 'POST_COMMENT_REQUEST_SUCCESS' = 'POST_COMMENT_REQUEST_SUCCESS';
export const POST_COMMENT_REQUEST_FAILED: 'POST_COMMENT_REQUEST_FAILED' = 'POST_COMMENT_REQUEST_FAILED';

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

export type TPostCommentRequest = {
  type: typeof POST_COMMENT_REQUEST;
};

export type TPostCommentRequestSuccess = {
  type: typeof POST_COMMENT_REQUEST_SUCCESS;
  comment: TComment;
};

export type TPostCommentRequestFailed = {
  type: typeof POST_COMMENT_REQUEST_FAILED;
};

export type TCommentsActions = TGetCommentsRequest |
TGetCommentsRequestSuccess |
TGetCommentsRequestFailed |
TClearComments |
TPostCommentRequest |
TPostCommentRequestSuccess |
TPostCommentRequestFailed;

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

export const postCommentRequest = (): TPostCommentRequest => {
  return {
    type: POST_COMMENT_REQUEST,
  };
};

export const postCommentRequestSuccess = (comment: TComment): TPostCommentRequestSuccess => {
  return {
    type: POST_COMMENT_REQUEST_SUCCESS,
    comment,
  };
};

export const postCommentRequestFailed = (): TPostCommentRequestFailed => {
  return {
    type: POST_COMMENT_REQUEST_FAILED,
  };
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

export const postCommentThunk = (
  post: string,
  comment:
  {
    name: string,
    email: string,
    body: string
  },
) => async (dispatch: AppDispatch) => {
  dispatch(postCommentRequest());
  try {
    const response = await postRequest(
      `${API_BASE_URL}/posts/${post}/comments`,
      comment,
    );
    console.log(response);
    dispatch(postCommentRequestSuccess(response));
  } catch (e) {
    dispatch(postCommentRequestFailed());
  }
};
