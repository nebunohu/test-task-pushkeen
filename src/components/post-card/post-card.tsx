import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TPost } from '../../types';

import styles from './post-card.module.css';

type TPostCardProps = {
  post: TPost;
};

const PostCard: FC<TPostCardProps> = ({ post }) => {
  const location = useLocation();
  const { pathname } = location;
  const splitedPathname = pathname.split('/');
  const linkUrl = splitedPathname[splitedPathname.length - 1] === 'posts' ? post.id.toString() : `posts/${post.id.toString()}`;
  return (
    <div className={`${styles.wrapper1}`}>
      <Link className={`${styles.link}`} to={linkUrl}>
        <div className={`${styles.wrapper}`}>
          <div className={`${styles.title}`}>{post.title}</div>
          <div className={`${styles.body}`}><span>{post.body}</span></div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
