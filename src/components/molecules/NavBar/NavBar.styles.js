import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  height: 100%;
  width: 150px;
  position: fixed;
  z-index: 1;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  border-right: 1px solid ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const StyledTitle = styled.h2`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 10px 20px 10px 50%;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 25px 0;
  text-align: end;
`;

export const StyledNav = styled(Link)`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  padding: 10px 20px;
  width: 100%;
  text-align: end;
  text-decoration: none;
`;
