import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  margin-top: 60px;
  bottom: 0;
  position: sticky;
  width: 100%;
  z-index: 1100;
  padding: 24px;
  text-align: center;
  color: ${props =>props.theme.colors.primaryText};
  //background: linear-gradient(270deg, #A5EDFF 0%, #FCFEFF 100%);
`;

export  const FooterLink = styled.footer`
  color: ${props =>props.theme.colors.blue};
`;
