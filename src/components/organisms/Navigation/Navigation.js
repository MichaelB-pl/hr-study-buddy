import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles';

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

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Studdy
          <br />
          Buddy
        </h1>
      </Logo>
      {links.map((link) => (
        <StyledLink key={link.to} to={link.to}>
          {link.title}
        </StyledLink>
      ))}
    </Wrapper>
  );
};

export default Navigation;
