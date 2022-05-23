import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UsersList from '../users-list/users-list';
import UserProfile from '../user-profile/user-profile';
import UsersPosts from '../users-posts/users-posts';
import Header from '../header/header';

import './app.modules.css';
import PostDedailed from '../post-detailed/post-detailed';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/:userId" element={<UserProfile />} />
        <Route path="/:userId/posts" element={<UsersPosts />} />
        <Route path="/:userId/posts/:postId" element={<PostDedailed />} />
      </Routes>
    </div>
  );
}

export default App;
