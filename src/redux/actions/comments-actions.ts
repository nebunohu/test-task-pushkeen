import { TComment } from '../../types/index';

export const GET_COMMENTS_REQUEST: 'GET_COMMENTS_REQUEST' = 'GET_COMMENTS_REQUEST';
export const GET_COMMENTS_REQUEST_SUCCESS: 'GET_COMMENTS_REQUEST_SUCCESS' = 'GET_COMMENTS_REQUEST_SUCCESS';
export const GET_COMMENTS_REQUEST_FAILED: 'GET_COMMENTS_REQUEST_FAILED' = 'GET_COMMENTS_REQUEST_FAILED';
export const CLEAR_COMMENTS: 'CLEAR_COMMENTS' = 'CLEAR_COMMENTS';

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

export type TCommentsActions = TGetCommentsRequest |
TGetCommentsRequestSuccess |
TGetCommentsRequestFailed |
TClearComments;
