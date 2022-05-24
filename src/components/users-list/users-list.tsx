import React, { FC } from 'react';
import { useAppSelector } from '../../sevices/hooks';
import { TUser } from '../../types';
import UserCard from '../user-card/user-card';

// Styles
import styles from './users-list.module.css';

const UsersList: FC = () => {
  const { users } = useAppSelector((store) => store.usersState);

  if (!users.length) {
    return (
      <div>
        Список пользователей пуст
      </div>
    );
  }
  return (
    <div className={`${styles.wrapper}`}>
      {users.map((el: TUser) => <UserCard key={Math.random()} user={el} />)}
    </div>
  );
};

export default UsersList;
