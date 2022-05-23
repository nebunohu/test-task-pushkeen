import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../redux/reducers/users';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
