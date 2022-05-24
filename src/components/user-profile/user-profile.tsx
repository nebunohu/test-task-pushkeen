import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../sevices/hooks';
import { TPost, TUser } from '../../types';
import Button from '../../ui/button/button';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import PostCard from '../post-card/post-card';
import UserInfo from '../user-info/user-info';

// Styles
import styles from './user-profile.module.css';

const UserProfile: FC = () => {
  const { list, posts } = useAppSelector((store) => store.users);
  const params = useParams();
  const user = list.find((el: TUser) => el.id === parseInt(params.userId!, 10));
  const usersPosts = posts.filter((el: TPost) => el.userId === parseInt(params.userId!, 10));

  if (!user) {
    return <div>404</div>;
  }

  return (
    <div className={`${styles.wrapper}`}>
      <Breadcrumbs />
      <UserInfo user={user} />
      <div className={`${styles.postsWrapper}`}>
        {usersPosts.map((el: TPost, index: number) => {
          if (index > 2) return null;
          return <PostCard key={el.id} post={el} />;
        })}
      </div>
      <Link className={`${styles.link}`} to="posts"><Button value="Watch all" /></Link>
    </div>
  );
};

export default UserProfile;
