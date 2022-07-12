import styled from 'styled-components';

const StyledNumpadButton = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10%;
  border: 1px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.accent};
  cursor: pointer;
  &:hover {
    filter: brightness(70%);
  }
`;

const ButtonSpan = styled.span`
  user-select: none;
`;

export function NumpadButtonComponent(props: { label: string; handleClick: any }) {
  return (
    <StyledNumpadButton style={{ fontSize: '30px' }} onClick={() => props.handleClick(props.label)}>
      <ButtonSpan>{props.label}</ButtonSpan>
    </StyledNumpadButton>
  );
}
