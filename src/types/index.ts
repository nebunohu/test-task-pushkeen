import { ThunkAction, Action } from '@reduxjs/toolkit';
import store from '../sevices/store';
import { TUsersActions } from '../redux/actions/users-actions';

export type TApplicationActions = TUsersActions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
TApplicationActions,
Action<string>
>;

export type TUser = {
  'id': number;
  'name': string;
  'username': string;
  'email': string;
  'address': {
    'street': string;
    'suite': string;
    'city': string;
    'zipcode': string;
    'geo': {
      'lat': string;
      'lng': string;
    }
  },
  'phone': string;
  'website': string;
  'company': {
    'name': string;
    'catchPhrase': string;
    'bs': string;
  }
};

export type TPost = {
  'userId': number;
  'id': number;
  'title': string;
  'body': string;
};

export type TComment = {
  postId: number;
  id: number;
  name: string;
  body: string;
  email: string;
};
