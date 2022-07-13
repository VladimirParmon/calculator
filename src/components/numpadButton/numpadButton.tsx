import { StyledNumpadButton, ButtonSpan } from './components';

export function NumpadButtonComponent(props: {
  label: string;
  handleClick: (label: string) => void;
}) {
  return (
    <StyledNumpadButton style={{ fontSize: '30px' }} onClick={() => props.handleClick(props.label)}>
      <ButtonSpan>{props.label}</ButtonSpan>
    </StyledNumpadButton>
  );
}
