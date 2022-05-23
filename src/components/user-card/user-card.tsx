import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { TUser } from '../../types';
import Button from '../../ui/button/button';

import styles from './user-card.module.css';

type TUserCardProps = {
  user: TUser;
};

const UserCard: FC<TUserCardProps> = ({ user }) => (
  <div className={`${styles.wrapper}`}>
    <div className={`${styles.name}`}>
      {`${user.name}`}
    </div>
    <div className={`${styles.city}`}>
      {`${user.address.city}`}
    </div>
    <Link to={`/${user.id}`}><Button value="Смотерть профиль" /></Link>
  </div>
);

export default UserCard;
