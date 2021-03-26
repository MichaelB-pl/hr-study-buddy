import React from 'react';
import UsersListItem from 'components/UsersListItem/UsersListItem';
import { users } from 'data/users';
import styles from './UsersList.module.scss';

const UsersList = () => (
  <div className={`${styles.container} ${styles.hasBorder}`}>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);
UsersList.propTypes = {};

export default UsersList;
