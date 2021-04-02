import React, { useState, useEffect } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users as usersData } from 'data/users';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

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
    <>
      <Wrapper>
        <StyledTitle>Add a new student</StyledTitle>
        <FormField label="Name" id="name" name="name" />
        <FormField label="Attendence" id="attendance" name="attendance" />
        <FormField label="Average" id="average" name="average" />
        <Button>Add</Button>
      </Wrapper>
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
