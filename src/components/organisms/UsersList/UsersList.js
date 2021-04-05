import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';

const UsersList = ({ title = 'Users List', isLoading, users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>{isLoading ? 'Loading...' : title}</StyledTitle>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem index={i} key={userData.name} userData={userData} deleteUser={deleteUser} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
