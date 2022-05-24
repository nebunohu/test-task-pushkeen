import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../redux/reducers/comments';
import usersReducer from '../redux/reducers/users';

const store = configureStore({
  reducer: {
    usersState: usersReducer,
    commentsState: commentsReducer,
  },
});

export default store;
