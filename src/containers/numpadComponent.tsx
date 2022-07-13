import { NumpadButtonComponent } from 'components/numpadButton/numpadButton';
import { buttons } from 'constants/constants';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 20px;
  grid-column-gap: 40px;
  max-width: 800px;
`;

export function NumpadComponent(props: { handleClick: (value: string) => void }) {
  return (
    <GridContainer>
      {buttons.map((button) => (
        <NumpadButtonComponent label={button} key={button} handleClick={props.handleClick} />
      ))}
    </GridContainer>
  );
}
