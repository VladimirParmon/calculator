import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #434343;
  padding: 15px;
  color: white;
  font-size: 40px;
`;

const Spacer = styled.span`
  flex-grow: 1;
`;

const HeaderButton = styled.button<{
  active: boolean;
}>`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: white;
  line-height: 40px;
  font-size: 40px;
  ${(props) =>
    props.active &&
    css`
      &:after {
        content: '';
        height: 2px;
        display: block;
        margin-top: 2px;
        background-color: white;
        text-decoration: underline;
      }
    `}
`;

const HeaderLogoSpan = styled.span`
  @media screen and (max-width: ${(props) => props.theme.media.headerChange}) {
    display: none;
  }
`;

export { StyledHeader, Spacer, HeaderButton, HeaderLogoSpan };
