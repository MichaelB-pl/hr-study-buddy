import React from 'react';
import UsersListItem from './UsersListItem';
import { users } from 'data/users';

const UsersList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);
UsersList.propTypes = {};

export default UsersList;
