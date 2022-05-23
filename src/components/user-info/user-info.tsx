import React, { FC } from 'react';
import { TUser } from '../../types';

// Styles
import styles from './user-info.module.css';

type TUserInfoProps = {
  user: TUser;
};

const UserInfo: FC<TUserInfoProps> = ({ user }) => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.userName}`}>{user.name}</div>
      <div className={`${styles.meta}`}>
        <div className={`${styles.metaSection}`}>{user.address.city}</div>
        <div className={`${styles.metaSection}`}>{user.email}</div>
        <div className={`${styles.metaSection}`}>{user.phone}</div>
      </div>
    </div>
  );
};

export default UserInfo;
