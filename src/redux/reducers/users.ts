import { TUser, TPost } from '../../types';
import {
  GET_POSTS_REQUEST,
  GET_USERS_REQUEST,
  GET_USERS_REQUEST_FAILED,
  GET_USERS_REQUEST_SUCCESS,
  GET_POSTS_REQUEST_SUCCESS,
  GET_POSTS_REQUEST_FAILED,
  TUsersActions,
} from '../actions/users-actions';

type TUsersState = {
  list: Array<TUser>;
  posts: Array<TPost>;

  getUsersRequest: boolean;
  getUsersRequestSuccess: boolean;
  getUsersRequestFailed: boolean;

  getPostsRequest: boolean;
  getPostsRequestSuccess: boolean;
  getPostsRequestFailed: boolean;
};

const initialState: TUsersState = {
  list: [],
  posts: [],

  getUsersRequest: false,
  getUsersRequestSuccess: false,
  getUsersRequestFailed: false,

  getPostsRequest: false,
  getPostsRequestSuccess: false,
  getPostsRequestFailed: false,
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
        list: action.users,
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
    default: {
      return state;
    }
  }
};

export default usersReducer;
