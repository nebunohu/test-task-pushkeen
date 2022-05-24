import React, {
  FC,
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../sevices/hooks';
import { TPost } from '../../types';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import PostCard from '../post-card/post-card';

import styles from './users-posts.module.css';

type TUserPostsProps = {
  posts?: Array<TPost>;
};

const UsersPosts: FC<TUserPostsProps> = () => {
  const { userId } = useParams();
  const { posts } = useAppSelector((store) => store.users);
  const [usersPosts, setUsersPosts] = useState<Array<TPost>>([]);

  useEffect(() => {
    setUsersPosts(posts.filter((el: TPost) => el.userId === parseInt(userId!, 10)));
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <Breadcrumbs />
      {usersPosts.map((el: TPost) => <PostCard key={el.id} post={el} />)}
    </div>
  );
};

export default UsersPosts;
