import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ average, theme }) => (average >= 4 ? theme.colors.success : average >= 3 ? theme.colors.warning : theme.colors.error)};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
