import React, { FC } from 'react';
import { useAppSelector } from '../../sevices/hooks';
import { TUser } from '../../types';
import UserCard from '../user-card/user-card';

// Styles
import styles from './users-list.module.css';

const UsersList: FC = () => {
  const { list } = useAppSelector((store) => store.users);

  if (!list.length) {
    return (
      <div>
        Список пользователей пуст
      </div>
    );
  }
  return (
    <div className={`${styles.wrapper}`}>
      {list.map((el: TUser) => <UserCard key={Math.random()} user={el} />)}
    </div>
  );
};

export default UsersList;
