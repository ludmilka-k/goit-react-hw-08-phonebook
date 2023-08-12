import styled from '@emotion/styled';   //   or 'styled-components'

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;
  color:${props =>props.theme.colors.primaryText};
  background: linear-gradient(270deg, #A5EDFF 0%, #FCFEFF 100%);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
  0 4px 5px 0 rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
` ;



