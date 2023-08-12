import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div``;
export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: ${props =>props.theme.colors.primaryText};
  border: ${props => ` 1px solid ${props.theme.colors.grey}`};
  border-radius: 4px;
  font-size: 20px;

  &:hover {
    color: ${props =>props.theme.colors.yellow};
    border: ${props => ` 1px solid ${props.theme.colors.yellow}`};
  }
`