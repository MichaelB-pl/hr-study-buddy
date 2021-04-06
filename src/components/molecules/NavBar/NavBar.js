import React from 'react';
import { Wrapper, StyledTitle, StyledNav } from './NavBar.styles';

const links = [
  {
    title: 'Dashboard',
    to: '/',
  },
  {
    title: 'Add user',
    to: '/add-user',
  },
  {
    title: 'Settings',
    to: '/settings',
  },
  {
    title: 'Logout',
    to: '/logout',
  },
];

const NavBar = () => {
  return (
    <Wrapper>
      <StyledTitle>Study Buddy</StyledTitle>
      {links.map((link) => (
        <StyledNav to={link.to}>{link.title}</StyledNav>
      ))}
    </Wrapper>
  );
};

export default NavBar;
