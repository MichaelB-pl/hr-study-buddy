import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users } from 'data/users';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, i) => (
        <UsersListItem index={i} key={userData.name} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);
UsersList.propTypes = {};

export default UsersList;
