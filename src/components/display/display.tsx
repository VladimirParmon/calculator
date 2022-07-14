import React from 'react';
import { StyledHeading } from './components';

// export function DisplayComponent({ input }: { input: string }) {
//   return <StyledHeading data-cy="display">{input === '' ? '0' : input}</StyledHeading>;
// }
export class DisplayComponent extends React.PureComponent<
  { input: string },
  Record<string, never>
> {
  render() {
    return (
      <StyledHeading data-cy="display">
        {this.props.input === '' ? '0' : this.props.input}
      </StyledHeading>
    );
  }
}
