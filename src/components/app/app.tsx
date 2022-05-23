import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import UsersList from '../users-list/users-list';
import UserProfile from '../user-profile/user-profile';
import UsersPosts from '../users-posts/users-posts';
import Header from '../header/header';
import PostDedailed from '../post-detailed/post-detailed';
import { useAppDispatch } from '../../sevices/hooks';

import { getUsersThunk, getPostsThunk } from '../../redux/actions/users-actions';

import styles from './app.module.css';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPostsThunk());
    dispatch(getUsersThunk());
  }, []);

  return (
    <div className={`${styles.app}`}>
      <Header />
      <div className={`${styles.contentWrapper}`}>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/:userId" element={<UserProfile />} />
          <Route path="/:userId/posts" element={<UsersPosts />} />
          <Route path="/:userId/posts/:postId" element={<PostDedailed />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
