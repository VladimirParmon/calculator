import { NumpadButtonComponent } from 'components/numpadButton/numpadButton';
import { buttons } from 'constants/constants';
import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 20px;
  grid-column-gap: 40px;
  max-width: 800px;
  justify-content: center;
  justify-items: center;

  @media screen and (max-width: ${(props) => props.theme.media.buttonsChange}) {
    grid-row-gap: 5px;
    grid-column-gap: 10px;
    max-width: none;
  }
`;

// export function NumpadComponent(props: { handleClick: (value: string) => void }) {
//   return (
//     <GridContainer data-cy="numpad">
//       {buttons.map((button) => (
//         <NumpadButtonComponent label={button} key={button} handleClick={props.handleClick} />
//       ))}
//     </GridContainer>
//   );
// }

export class NumpadComponent extends React.Component<{ handleClick: (value: string) => void }> {
  render() {
    return (
      <GridContainer data-cy="numpad">
        {buttons.map((button) => (
          <NumpadButtonComponent label={button} key={button} handleClick={this.props.handleClick} />
        ))}
      </GridContainer>
    );
  }
}
