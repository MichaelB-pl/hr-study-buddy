import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.darkGrey + 'af'};
  margin: 0 !important;
  padding: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
