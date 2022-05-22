import { GET_USERS_REQUEST, getUsersRequest, GET_USERS_REQUEST_SUCCESS } from './../actions/users-actions';
import { TUsersActions } from '../actions/users-actions';

type TUsersState = {
  list: Array<any>;

  getUsersRequest: boolean;
  getUsersRequestSuccess: boolean;
  getUsersRequestFailed: boolean;
};

const initialState: TUsersState = {
  list: [],

  getUsersRequest: false,
  getUsersRequestSuccess: false,
  getUsersRequestFailed: false,
};

const usersReducer = (state = initialState, action: TUsersActions) => {
  switch (action.type) {
    case GET_USERS_REQUEST: {
      return {
        ...state,
        getUsersRequest: true,
        getUsersRequestSuccess: false,
        getUsersRequestFailed: false,
      }
    }
    case GET_USERS_REQUEST_SUCCESS: {
      return {
        ...state,
        getUsersRequest: false,
        getUsersRequestSuccess: true,
        list: action.users
      }
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
