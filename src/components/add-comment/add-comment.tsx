import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { closeModal } from '../../redux/actions/app-actions';
import { postCommentThunk } from '../../redux/actions/comments-actions';
import { useAppDispatch } from '../../sevices/hooks';
import Button from '../../ui/button/button';

// Styles
import styles from './add-comment.module.css';

const AddComment: FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', body: '' });
  const dispatch = useAppDispatch();
  const location = useLocation();
  const splitedLocation = location.pathname.split('/');
  const postId = splitedLocation[splitedLocation.length - 1];

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(postCommentThunk(postId, formState));
    setFormState({ name: '', email: '', body: '' });
    dispatch(closeModal());
  };

  return (
    <form className={`${styles.commentForm}`} onSubmit={onSubmitHandler}>
      <label className={`${styles.formElement}`} htmlFor="email">
        E-mail:
        <input name="email" type="email" value={formState.email} onChange={onChangeHandler} />
      </label>
      <label className={`${styles.formElement}`} htmlFor="name">
        Header:
        <input name="name" type="text" value={formState.name} onChange={onChangeHandler} />
      </label>
      <label className={`${styles.formElement} ${styles.commentInput}`} htmlFor="body">
        Comment:
        <textarea className={`${styles.teaxtAreaElement}`} name="body" value={formState.body} onChange={onChangeHandler} />
      </label>
      <div className={`${styles.buttonWrapper}`}>
        <Button type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default AddComment;
