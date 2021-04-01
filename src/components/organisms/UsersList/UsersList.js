import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users } from 'data/users';
import { Wrapper, StyledList } from './UsersList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    mockAPI()
      .then((users) => this.setState({ users, isLoading: false }))
      .catch((err) => console.error(err));
  }

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    const { title = 'Users List' } = this.props;
    const { users, isLoading } = this.state;

    return (
      <Wrapper>
        <h1>{isLoading ? 'Loading...' : title}</h1>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem index={i} key={userData.name} userData={userData} deleteUser={this.deleteUser} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
