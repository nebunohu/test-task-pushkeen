import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../redux/reducers/app';
import commentsReducer from '../redux/reducers/comments';
import usersReducer from '../redux/reducers/users';

const store = configureStore({
  reducer: {
    usersState: usersReducer,
    commentsState: commentsReducer,
    app: appReducer,
  },
});

export default store;
