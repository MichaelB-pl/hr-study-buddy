import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

const UsersListItem = ({ deleteUser, index, userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <StyledAverage average={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendence: PropTypes.string,
  }),
};

export default UsersListItem;
