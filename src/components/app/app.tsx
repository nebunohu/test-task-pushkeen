import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import UsersList from '../users-list/users-list';
import UserProfile from '../user-profile/user-profile';
import UsersPosts from '../users-posts/users-posts';
import Header from '../header/header';
import PostDedailed from '../post-detailed/post-detailed';
import AddComment from '../add-comment/add-comment';
import Modal from '../modal/modal';
import { useAppDispatch, useAppSelector } from '../../sevices/hooks';

import { getUsersThunk, getPostsThunk } from '../../redux/actions/users-actions';

import styles from './app.module.css';
import { closeModal } from '../../redux/actions/app-actions';

function App() {
  const dispatch = useAppDispatch();
  const { isModalOpen } = useAppSelector((store) => store.app);
  useEffect(() => {
    dispatch(getPostsThunk());
    dispatch(getUsersThunk());
  }, []);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isModalOpen]);

  const closeHandler = () => {
    dispatch(closeModal());
  };

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
      {isModalOpen && (
        <Modal closeModal={closeHandler}>
          <AddComment />
        </Modal>
      )}
    </div>
  );
}

export default App;
