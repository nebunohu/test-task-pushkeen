import React, { FC } from 'react';
import { TComment } from '../../types';

// Styles
import styles from './comment-card.module.css';

type TCommentCardProps = {
  comment: TComment;
};

const CommentCard: FC<TCommentCardProps> = ({ comment }) => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.email}`}>{comment.email}</div>
      <div className={`${styles.name}`}>{comment.name}</div>
      <div>{comment.body}</div>
    </div>
  );
};

export default CommentCard;
