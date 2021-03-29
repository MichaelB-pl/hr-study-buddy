import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 20px;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 20px 0 5px 0;
`;

export const Attendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0 0 20px 0;
`;
