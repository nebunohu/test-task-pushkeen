import React, { FC, useEffect } from "react";
import { getUsersThunk } from "../../redux/actions/users-actions";
import { useAppDispatch, useAppSelector } from "../../sevices/hooks";
import { TUser } from "../../types";
import UserCard from "../user-card/user-card";

const UsersList: FC = () => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector(store => store.users);
  useEffect(() => {
    if ( !list.length ) dispatch(getUsersThunk());
  }, [])

  if (!list.length) {
    return (
      <div>
        Список пользователей пуст
      </div>
    )
  }
  return (
    <div>
      {list.map((el: TUser, index: number) => <UserCard key={Math.random()} user={el} />)}
    </div>
  )
}

export default UsersList;