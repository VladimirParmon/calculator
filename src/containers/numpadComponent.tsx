import { NumpadButtonComponent } from 'components/numpadButton';

type HandleClick = (value: string) => void;

export function NumpadComponent(props: { handleClick: HandleClick }) {
  const buttons = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '+',
    '/',
    '*',
    '%',
    'C',
    '.',
    '=',
    '<=',
    '(',
    ')'
  ];

  return (
    <div>
      {buttons.map((button) => (
        <NumpadButtonComponent label={button} key={button} handleClick={props.handleClick} />
      ))}
    </div>
  );
}
