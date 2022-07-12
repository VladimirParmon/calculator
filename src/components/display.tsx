import styled from 'styled-components';

export function DisplayComponent({ input }: { input: string }) {
  const StyledHeading = styled.h2`
    font-size: 50px;
    line-height: 50px;
    text-align: right;
    &:after {
      content: '';
      height: 2px;
      display: block;
      margin-top: 2px;
      background-color: black;
      text-decoration: underline;
    }
  `;
  return <StyledHeading>{input === '' ? '0' : input}</StyledHeading>;
}
