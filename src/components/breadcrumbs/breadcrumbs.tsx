import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import useReactRouterBreadcrumbs, { BreadcrumbComponentProps } from 'use-react-router-breadcrumbs';
import { useAppSelector } from '../../sevices/hooks';
import { TUser } from '../../types';

// Styles
import styles from './breadcrumbs.module.css';

interface LooseObject {
  [key: string]: any
}

const DynamicUserBreadcrumb: FC<BreadcrumbComponentProps> = ({ match }) => {
  const { users } = useAppSelector((store) => store.usersState);
  const userNamesById: LooseObject = {};
  users.forEach((el: TUser) => {
    const key = el.id.toString();
    userNamesById[key] = el.name;
  });
  const text = match.params.userId ? userNamesById[match.params.userId] : '';

  return (
    <span>{text}</span>
  );
};

const Breadcrumbs: FC = () => {
  const routes = [
    { path: '/:userId', breadcrumb: DynamicUserBreadcrumb },
  ];
  const breadCrumbs = useReactRouterBreadcrumbs(routes);
  return (
    <div className={`${styles.wrapper}`}>
      {breadCrumbs.map(({ match, breadcrumb }, index) => {
        if (index >= breadCrumbs.length - 1) return null;
        return (
          <span key={match.pathname}>
            /&nbsp;
            <NavLink className={`${styles.link}`} to={match.pathname}>{breadcrumb}</NavLink>
            &nbsp;
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
