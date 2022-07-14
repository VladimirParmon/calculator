import { StyledButton } from './components';

export function CustomButtonComponent(props: { clickAction: () => void; children: string }) {
  return <StyledButton onClick={props.clickAction}>{props.children}</StyledButton>;
}
