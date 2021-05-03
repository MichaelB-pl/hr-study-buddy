import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  width: auto;
  background: ${({ theme: { colors } }) => `linear-gradient(${colors.lightGrey} 66%, ${colors.lightGrey}00)`}};
  position: sticky;
  top: 0;
  z-index: 1;

  & > *:not(:first-child) {
    margin-left: 20px;
  }
`;
