import React, { FC } from 'react';
import { TUser } from '../../types';

type TUserCardProps = {
  user: TUser;
}

const UserCard: FC<TUserCardProps> = ({ user }) => (
  <div>
    {`${user.name} ${user.username}`}
  </div>
);

export default UserCard;
