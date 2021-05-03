import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useParams, Link } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import { Title } from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, NavBar } from './Dashboard.styles';
import Dialog from 'components/organisms/Dialog/Dialog';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => {
        setGroups(data.groups);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => {
        setStudents(data.students);
      })
      .catch((err) => console.error(err));
  }, [id, groups]);

  return (
    <Wrapper>
      <NavBar>
        <Title>Group {`${id || groups[0]}`}</Title>
        <Button>change group ▶</Button>
        <Dialog visible={true}>
        </Dialog>
      </NavBar>
      <ViewWrapper>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
        <UsersList users={students} />
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
