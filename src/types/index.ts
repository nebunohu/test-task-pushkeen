import { TUsersActions } from '../redux/actions/users-actions';

export type TApplicationActions = TUsersActions;

export type TUser = {
  "id": number;
  "name": string;
  "username": string;
  "email": string;
  "address": {
    "street": string;
    "suite": string;
    "city": string;
    "zipcode": string;
    "geo": {
      "lat": string;
      "lng": string;
    }
  },
  "phone": string;
  "website": string;
  "company": {
    "name": string;
    "catchPhrase": string;
    "bs": string;
  }
  
}
