import React from 'react';
import { StyledNumpadButton, ButtonSpan } from './components';

// export function NumpadButtonComponent(props: {
//   label: string;
//   handleClick: (label: string) => void;
// }) {
//   return (
//     <StyledNumpadButton style={{ fontSize: '30px' }} onClick={() => props.handleClick(props.label)}>
//       <ButtonSpan>{props.label}</ButtonSpan>
//     </StyledNumpadButton>
//   );
// }

export class NumpadButtonComponent extends React.PureComponent<{
  label: string;
  handleClick: (label: string) => void;
}> {
  render() {
    return (
      <StyledNumpadButton
        style={{ fontSize: '30px' }}
        onClick={() => this.props.handleClick(this.props.label)}
      >
        <ButtonSpan>{this.props.label}</ButtonSpan>
      </StyledNumpadButton>
    );
  }
}
