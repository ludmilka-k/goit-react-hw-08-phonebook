import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  color: ${props => props.theme.colors.blue};
  font-size: 20px;
`;

export const ButtonLogOut = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  border: ${props => ` 1px solid ${props.theme.colors.grey}`};
  border-radius: 4px;
  padding: 12px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 1px 6px rgba(46, 47, 66, 0.08);

  &:hover {
    background-color: ${props => props.theme.colors.yellow};
    border: ${props => ` 1px solid ${props.theme.colors.yellow}`};
  }

  &:active {
    background-color: ${props => props.theme.colors.yellow};
    border: ${props => ` 1px solid ${props.theme.colors.yellow}`};
    box-shadow: none;
    transform: translateY(1px);
  }
`;
