import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-size: 50px;
  line-height: 50px;
  text-align: right;
  color: ${(props) => props.theme.fontColor};
  &:after {
    content: '';
    height: 2px;
    display: block;
    margin-top: 2px;
    background-color: ${(props) => props.theme.accent};
    text-decoration: underline;
  }
`;

export function DisplayComponent({ input }: { input: string }) {
  return <StyledHeading>{input === '' ? '0' : input}</StyledHeading>;
}
