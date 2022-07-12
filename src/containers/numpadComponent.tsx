import { NumpadButtonComponent } from 'components/numpadButton';
import styled from 'styled-components';

type HandleClick = (value: string) => void;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 20px;
  grid-column-gap: 40px;
  max-width: 800px;
`;

export function NumpadComponent(props: { handleClick: HandleClick }) {
  const buttons = [
    'C',
    '7',
    '8',
    '9',
    '*',
    '-',
    '4',
    '5',
    '6',
    '/',
    '+',
    '1',
    '2',
    '3',
    '%',
    '.',
    '(',
    '0',
    ')',
    '=',
    '<='
  ];

  return (
    <GridContainer>
      {buttons.map((button) => (
        <NumpadButtonComponent label={button} key={button} handleClick={props.handleClick} />
      ))}
    </GridContainer>
  );
}
