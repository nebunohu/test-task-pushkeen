import React, { FC } from 'react';
import { TPost } from '../../types';

type TUserPostsProps = {
  posts?: Array<TPost>;
};

const UsersPosts: FC<TUserPostsProps> = () => {
  return (
    <div>
      Posts
    </div>
  );
};

export default UsersPosts;
