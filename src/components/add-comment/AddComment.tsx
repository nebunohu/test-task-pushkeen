import React, { FC, FormEvent } from 'react';
// import { useAppDispatch } from '../../sevices/hooks';
import Button from '../../ui/button/button';

const AddComment: FC = () => {
  // const dispatch = useAppDispatch();

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    // dispatch();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input name="name" type="text" />
      <input name="email" type="email" />
      <input name="comment" type="text" />
      <Button type="submit" value="Submit" />
    </form>
  );
};

export default AddComment;
