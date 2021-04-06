import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey}; // ${({ isSecondary }) => (isSecondary ? '#e7e044' : '#c0c7d6')};
  border-radius: 50%; // ${({ isSquare }) => (isSquare ? '0px' : '50%')};
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
