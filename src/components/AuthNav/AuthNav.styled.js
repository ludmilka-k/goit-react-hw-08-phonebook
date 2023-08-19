import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
display: flex;
  gap: 12px;
`;
export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: ${props =>props.theme.colors.primaryText};
  border: ${props => ` 2px solid ${props.theme.colors.grey}`};
  border-radius: 4px;
  font-size: 20px;

  &:hover {
    color: ${props =>props.theme.colors.blue};
    border: ${props => ` 2px solid ${props.theme.colors.blue}`};
  }
`
