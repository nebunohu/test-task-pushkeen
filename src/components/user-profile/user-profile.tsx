import React, { FC, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../sevices/hooks';
import { TPost, TUser } from '../../types';
import Button from '../../ui/button/button';
import PostCard from '../post-card/post-card';
import UserInfo from '../user-info/user-info';

// Styles
import styles from './user-profile.module.css';

const UserProfile: FC = () => {
  const { list, posts } = useAppSelector((store) => store.users);
  const usersPostsref = useRef<Array<TPost>>(posts);
  const params = useParams();
  const user = list.find((el: TUser) => el.id === parseInt(params.userId!, 10));

  useEffect(() => {
    usersPostsref.current = posts.filter((el: TPost) => el.userId === parseInt(params.userId!, 10));
  }, [posts]);

  if (!user) {
    return <div>404</div>;
  }

  return (
    <div>
      <UserInfo user={user} />
      <div className={`${styles.postsWrapper}`}>
        {usersPostsref.current.map((el: TPost, index: number) => {
          if (index > 2) return null;
          return <PostCard key={el.id} post={el} />;
        })}
      </div>
      <Link to="posts"><Button value="Watch all" /></Link>
    </div>
  );
};

export default UserProfile;
