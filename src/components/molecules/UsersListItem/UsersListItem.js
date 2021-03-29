import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';
import UserInfo from 'components/atoms/UserInfo/UserInfo';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Average>{average}</Average>
    <UserInfo name={name} attendance={attendance} />
    <Button />
  </Wrapper>
);
UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendence: PropTypes.string,
  }),
};

export default UsersListItem;
