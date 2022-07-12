import styled from 'styled-components';

const StyledNumpadButton = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  border-radius: 10%;
  border: 1px solid black;
  cursor: pointer;
`;

export function NumpadButtonComponent(props: { label: string; handleClick: any }) {
  return (
    <StyledNumpadButton style={{ fontSize: '30px' }} onClick={() => props.handleClick(props.label)}>
      <span>{props.label}</span>
    </StyledNumpadButton>
  );
}
