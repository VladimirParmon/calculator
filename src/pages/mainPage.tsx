import React, { useState } from 'react';
import { DisplayComponent } from 'components/display';
import { HistoryComponent } from 'components/history';
import { NumpadComponent } from 'containers/numpadComponent';
import { expressionCalculator } from 'utils/calculator';
import { addToHistory, clearHistory } from 'redux/historySlice';
import { useAppDispatch } from 'redux/hooks';

export function MainPage() {
  const [inputString, setInputString] = useState('');
  const dispatch = useAppDispatch();

  function calculate(): void {
    try {
      const result = expressionCalculator(inputString);
      dispatch(addToHistory(inputString));
      if (result) setInputString(result);
    } catch (err: any) {
      alert(err);
    }
  }

  function clear(): void {
    dispatch(clearHistory());
  }

  function handleClick(buttonPressed: string): void {
    const lastChar = inputString.toString().charAt(inputString.length - 1);

    if (lastChar && lastChar.match(/[-+/*%]/g) && buttonPressed.match(/[-+/*%]/g)) {
      if (buttonPressed === lastChar) {
        return;
      } else {
        setInputString((lastValue) => {
          return lastValue.slice(0, -1) + buttonPressed;
        });
        return;
      }
    }

    switch (buttonPressed) {
      case '=':
        calculate();
        break;
      case 'C':
        setInputString('');
        break;
      case '<=':
        setInputString((lastValue) => {
          return lastValue.slice(0, -1);
        });
        break;
      default:
        setInputString((prevState) => {
          return prevState + buttonPressed;
        });
    }
  }

  return (
    <React.Fragment>
      <div className="left">
        <DisplayComponent input={inputString} />
        <NumpadComponent handleClick={handleClick} />
      </div>
      <HistoryComponent />
    </React.Fragment>
  );
}
