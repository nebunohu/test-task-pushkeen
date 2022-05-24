import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { clearComments, getCommentsThunk } from '../../redux/actions/users-actions';
import { useAppDispatch, useAppSelector } from '../../sevices/hooks';
import { TComment, TPost, TUser } from '../../types';
import Button from '../../ui/button/button';
import AddComment from '../add-comment/AddComment';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import CommentCard from '../comment-card/comment-card';

// Styles
import styles from './post-detailed.module.css';

const PostDedailed: FC = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const dispatch = useAppDispatch();
  const { users, posts } = useAppSelector((store) => store.usersState);
  const { comments } = useAppSelector((store) => store.commentsState);
  const { pathname } = useLocation();
  const splitedPathName = pathname.split('/');
  const currentUserId = parseInt(splitedPathName[1], 10);
  const currentPostId = parseInt(splitedPathName[3], 10);
  const currentUser = users.find((el: TUser) => el.id === currentUserId);
  const currentPost = posts.find((el: TPost) => el.id === currentPostId);

  useEffect(() => {
    dispatch(getCommentsThunk(currentPost!.id.toString()));
    return () => {
      dispatch(clearComments());
    };
  }, []);

  const onAddCommentHandler = () => {
    setIsShowForm(!isShowForm);
  };

  if (!currentUser || !currentPost) return <div>404</div>;

  return (
    <div className={`${styles.wrapper}`}>
      <Breadcrumbs />
      <div className={`${styles.postBlockWrapper}`}>
        <div className={`${styles.name}`}>{currentUser.name}</div>
        <div className={`${styles.email}`}>{currentUser.email}</div>
        <div className={`${styles.title}`}>{currentPost.title}</div>
        <div>{currentPost.body}</div>
      </div>
      <div className={`${styles.commentsBlockWrapper}`}>
        <span className={`${styles.commentsHeader}`}>Comments:</span>
        {comments.map((comment: TComment) => {
          return <CommentCard key={comment.id + Math.random()} comment={comment} />;
        })}
      </div>
      <Button value={isShowForm ? 'Cancel' : 'Add Comment'} onClick={onAddCommentHandler} />
      {isShowForm && <AddComment />}
    </div>
  );
};

export default PostDedailed;
