import React, { FC, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPostsThunk } from '../../redux/actions/users-actions';
import { useAppDispatch, useAppSelector } from '../../sevices/hooks';
import { TPost, TUser } from '../../types';
import Button from '../../ui/button/button';

const UserProfile: FC = () => {
  const dispatch = useAppDispatch();
  const { list, posts } = useAppSelector((store) => store.users);
  const usersPostsref = useRef<Array<TPost>>([]);
  const params = useParams();
  const user = list.find((el: TUser) => el.id === parseInt(params.userId!, 10));

  useEffect(() => {
    dispatch(getPostsThunk());
  }, []);

  useEffect(() => {
    usersPostsref.current = posts.filter((el: TPost) => el.userId === parseInt(params.userId!, 10));
  }, [posts]);

  return (
    <div>
      <div>{user!.name}</div>
      {usersPostsref.current.map((el: TPost, index: number) => {
        if (index > 2) return null;
        return (
          <div style={{ border: '1px solid black' }} key={el.id}>
            <div>{el.title}</div>
            <div>{el.body}</div>
          </div>
        );
      })}
      <Link to="posts"><Button value="Watch all" /></Link>
    </div>
  );
};

export default UserProfile;
