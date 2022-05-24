import { TComment } from '../../types';
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_REQUEST_SUCCESS,
  GET_COMMENTS_REQUEST_FAILED,
  CLEAR_COMMENTS,
  POST_COMMENT_REQUEST,
  POST_COMMENT_REQUEST_SUCCESS,
  POST_COMMENT_REQUEST_FAILED,
  TCommentsActions,
} from '../actions/comments-actions';

type TCommentssState = {
  comments: Array<TComment>;

  getCommentsRequest: boolean;
  getCommentsRequestSuccess: boolean;
  getCommentsRequestFailed: boolean;

  postCommentRequest: boolean;
  postCommentRequestSuccess: boolean;
  postCommentRequestFailed: boolean;
};

const initialState: TCommentssState = {
  comments: [],

  getCommentsRequest: false,
  getCommentsRequestSuccess: false,
  getCommentsRequestFailed: false,

  postCommentRequest: false,
  postCommentRequestSuccess: false,
  postCommentRequestFailed: false,
};

const commentsReducer = (state = initialState, action: TCommentsActions) => {
  switch (action.type) {
    case GET_COMMENTS_REQUEST: {
      return {
        ...state,
        getCommentsRequest: true,
        getCommentsRequestSuccess: false,
        getCommentsRequestFailed: false,
      };
    }
    case GET_COMMENTS_REQUEST_SUCCESS: {
      return {
        ...state,
        getCommentsRequest: false,
        getCommentsRequestSuccess: true,
        comments: action.comments,
      };
    }
    case GET_COMMENTS_REQUEST_FAILED: {
      return {
        ...state,
        getCommentsRequest: false,
        getCommentsRequestFailed: true,
      };
    }
    case CLEAR_COMMENTS: {
      return {
        ...state,
        comments: [],
      };
    }
    case POST_COMMENT_REQUEST: {
      return {
        ...state,
        postCommentRequest: true,
        postCommentRequestSuccess: false,
        postCommentRequestFailed: false,
      };
    }
    case POST_COMMENT_REQUEST_SUCCESS: {
      return {
        ...state,
        comments: [...state.comments, action.comment],
        postCommentRequest: false,
        postCommentRequestSuccess: true,
      };
    }
    case POST_COMMENT_REQUEST_FAILED: {
      return {
        ...state,
        postCommentRequest: false,
        postCommentRequestFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default commentsReducer;
