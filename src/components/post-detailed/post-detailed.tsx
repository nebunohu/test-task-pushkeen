import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { clearComments, getCommentsThunk } from '../../redux/actions/users-actions';
import { useAppDispatch, useAppSelector } from '../../sevices/hooks';
import { TComment, TPost, TUser } from '../../types';
import CommentCard from '../comment-card/comment-card';

// Styles
import styles from './post-detailed.module.css';

const PostDedailed: FC = () => {
  const dispatch = useAppDispatch();
  const { list, posts, comments } = useAppSelector((store) => store.users);
  const { pathname } = useLocation();
  const splitedPathName = pathname.split('/');
  const currentUserId = parseInt(splitedPathName[1], 10);
  const currentPostId = parseInt(splitedPathName[3], 10);
  const currentUser = list.find((el: TUser) => el.id === currentUserId);
  const currentPost = posts.find((el: TPost) => el.id === currentPostId);

  useEffect(() => {
    dispatch(getCommentsThunk(currentPost!.id.toString()));
    return () => {
      dispatch(clearComments());
    };
  }, []);

  if (!currentUser || !currentPost) return <div>404</div>;

  return (
    <div className={`${styles.wrapper}`}>
      <div>
        <div>{currentUser.name}</div>
        <div>{currentUser.email}</div>
        <div>{currentPost.title}</div>
        <div>{currentPost.body}</div>
        {comments.map((comment: TComment) => <CommentCard key={comment.id} comment={comment} />)}
      </div>
    </div>
  );
};

export default PostDedailed;
