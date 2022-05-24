import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { postCommentThunk } from '../../redux/actions/comments-actions';
import { useAppDispatch } from '../../sevices/hooks';
import Button from '../../ui/button/button';

const AddComment: FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', body: '' });
  const dispatch = useAppDispatch();
  const location = useLocation();
  const splitedLocation = location.pathname.split('/');
  const postId = splitedLocation[splitedLocation.length - 1];

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(postCommentThunk(postId, formState));
    setFormState({ name: '', email: '', body: '' });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input name="name" type="text" value={formState.name} onChange={onChangeHandler} />
      <input name="email" type="email" value={formState.email} onChange={onChangeHandler} />
      <input name="body" type="text" value={formState.body} onChange={onChangeHandler} />
      <Button type="submit" value="Submit" />
    </form>
  );
};

export default AddComment;
