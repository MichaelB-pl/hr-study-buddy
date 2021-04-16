import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import styled from 'styled-components';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';

export const News = styled.div`
  grid-row: 1/3;
  grid-column: 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <News>
        <p>Velit nulla et adipisicing ut consequat.</p>
        <p>Velit nulla et adipisicing ut consequat.</p>
        <p>Velit nulla et adipisicing ut consequat.</p>
        <p>Velit nulla et adipisicing ut consequat.</p>
        <p>Velit nulla et adipisicing ut consequat.</p>
      </News>
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
