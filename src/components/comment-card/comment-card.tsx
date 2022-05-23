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
      <div className="email">{comment.email}</div>
      <div>{comment.name}</div>
      <div>{comment.body}</div>
    </div>
  );
};

export default CommentCard;
