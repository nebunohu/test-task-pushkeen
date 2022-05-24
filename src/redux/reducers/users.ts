import { TUser, TPost, TComment } from '../../types';
import {
  GET_POSTS_REQUEST,
  GET_USERS_REQUEST,
  GET_USERS_REQUEST_FAILED,
  GET_USERS_REQUEST_SUCCESS,
  GET_POSTS_REQUEST_SUCCESS,
  GET_POSTS_REQUEST_FAILED,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_REQUEST_SUCCESS,
  GET_COMMENTS_REQUEST_FAILED,
  CLEAR_COMMENTS,
  TUsersActions,
} from '../actions/users-actions';

type TUsersState = {
  users: Array<TUser>;
  posts: Array<TPost>;
  comments: Array<TComment>;

  getUsersRequest: boolean;
  getUsersRequestSuccess: boolean;
  getUsersRequestFailed: boolean;

  getPostsRequest: boolean;
  getPostsRequestSuccess: boolean;
  getPostsRequestFailed: boolean;

  getCommentsRequest: boolean;
  getCommentsRequestSuccess: boolean;
  getCommentsRequestFailed: boolean;
};

const initialState: TUsersState = {
  users: [],
  posts: [],
  comments: [],

  getUsersRequest: false,
  getUsersRequestSuccess: false,
  getUsersRequestFailed: false,

  getPostsRequest: false,
  getPostsRequestSuccess: false,
  getPostsRequestFailed: false,

  getCommentsRequest: false,
  getCommentsRequestSuccess: false,
  getCommentsRequestFailed: false,
};

const usersReducer = (state = initialState, action: TUsersActions) => {
  switch (action.type) {
    case GET_USERS_REQUEST: {
      return {
        ...state,
        getUsersRequest: true,
        getUsersRequestSuccess: false,
        getUsersRequestFailed: false,
      };
    }
    case GET_USERS_REQUEST_SUCCESS: {
      return {
        ...state,
        getUsersRequest: false,
        getUsersRequestSuccess: true,
        users: action.users,
      };
    }
    case GET_USERS_REQUEST_FAILED: {
      return {
        ...state,
        getUsersRequest: false,
        getUsersRequestFailed: true,
      };
    }
    case GET_POSTS_REQUEST: {
      return {
        ...state,
        getPostsRequest: true,
        getPostsRequestSuccess: false,
        getPostsRequestFailed: false,
      };
    }
    case GET_POSTS_REQUEST_SUCCESS: {
      return {
        ...state,
        getPostsRequest: false,
        getPostsRequestSuccess: true,
        posts: action.posts,
      };
    }
    case GET_POSTS_REQUEST_FAILED: {
      return {
        ...state,
        getPostsRequest: false,
        getPostsRequestFailed: true,
      };
    }
    case GET_COMMENTS_REQUEST: {
      return {
        ...state,
        getPostsRequest: true,
        getPostsRequestSuccess: false,
        getPostsRequestFailed: false,
      };
    }
    case GET_COMMENTS_REQUEST_SUCCESS: {
      return {
        ...state,
        getPostsRequest: false,
        getPostsRequestSuccess: true,
        comments: action.comments,
      };
    }
    case GET_COMMENTS_REQUEST_FAILED: {
      return {
        ...state,
        getPostsRequest: false,
        getPostsRequestFailed: true,
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

export default usersReducer;
