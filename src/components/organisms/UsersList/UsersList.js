import React, { useState, useEffect } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users as usersData } from 'data/users';
import { Wrapper, StyledList } from './UsersList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = ({ title = 'Users List' }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : title}</h1>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem index={i} key={userData.name} userData={userData} deleteUser={deleteUser} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
