import { Wrapper, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </Wrapper>
  );
};
