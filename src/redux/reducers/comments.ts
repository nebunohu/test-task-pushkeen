import { TComment } from '../../types';
import { TCommentsActions } from '../actions/comments-actions';
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_REQUEST_SUCCESS,
  GET_COMMENTS_REQUEST_FAILED,
  CLEAR_COMMENTS,
} from '../actions/users-actions';

type TCommentssState = {
  comments: Array<TComment>;

  getCommentsRequest: boolean;
  getCommentsRequestSuccess: boolean;
  getCommentsRequestFailed: boolean;
};

const initialState: TCommentssState = {
  comments: [],

  getCommentsRequest: false,
  getCommentsRequestSuccess: false,
  getCommentsRequestFailed: false,
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
        ggetCommentsRequestSuccess: true,
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
    default: {
      return state;
    }
  }
};

export default commentsReducer;
