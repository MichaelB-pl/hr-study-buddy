import React from 'react';
import { Wrapper, Name, Attendance } from './UserInfo.styles';

const UserInfo = ({ name, attendance }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Attendance>attendance: {attendance}</Attendance>
  </Wrapper>
);

export default UserInfo;
