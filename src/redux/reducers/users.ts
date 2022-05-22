import { TUsersActions } from '../actions/users-actions';

type TUsersState = {
  users: Array<any>;
};

const initialState: TUsersState = {
  users: [],
};

const usersReducer = (state = initialState, action: TUsersActions) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default usersReducer;
