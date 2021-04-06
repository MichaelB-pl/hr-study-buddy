import React from 'react';
import { Wrapper, StyledTitle, StyledNav } from './NavBar.styles';
import { NavBarItem } from 'components/atoms/NavBarItem/NavBarItem';

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
      <NavBarItem as="Link">siema</NavBarItem>
      {links.map((link) => (
        <StyledNav to={link.to}>{link.title}</StyledNav>
      ))}
    </Wrapper>
  );
};

export default NavBar;
