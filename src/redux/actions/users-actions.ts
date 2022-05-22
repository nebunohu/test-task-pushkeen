export const GET_USERS_REQUEST: 'GET_USERS_REQUEST' = 'GET_USERS_REQUEST';

export type TGetUsersRequest = {
  type: typeof GET_USERS_REQUEST;
};

export type TUsersActions = TGetUsersRequest;
