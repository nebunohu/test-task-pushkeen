import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer from '../redux/reducers/users';
// import counterReducer from '../features/counter/counterSlice';
import { TApplicationActions } from '../types';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
TApplicationActions,
Action<string>
>;
