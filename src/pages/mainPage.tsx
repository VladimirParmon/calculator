import React, { useState } from 'react';
import { DisplayComponent } from 'components/display/display';
import { HistoryComponent } from 'components/history/history';
import { NumpadComponent } from 'containers/numpadComponent';
import { expressionCalculator } from 'utils/calculator';
import { addToHistory } from 'redux/historySlice';
import { useAppDispatch } from 'redux/hooks';
import { PageLayout } from 'layouts';

export function MainPage() {
  const [inputString, setInputString] = useState('');
  const dispatch = useAppDispatch();

  function calculateAndSave(): void {
    try {
      const result = expressionCalculator(inputString);
      if (result) {
        dispatch(addToHistory(inputString));
        setInputString(result);
      }
    } catch (err: unknown) {
      alert(err);
    }
  }

  function handleClick(buttonPressed: string): void {
    const lastChar = inputString.toString().charAt(inputString.length - 1);
    const isItOperatorChange =
      lastChar && lastChar.match(/[-+/*%]/g) && buttonPressed.match(/[-+/*%]/g);

    if (isItOperatorChange) {
      changeOperator();
      return;
    }

    if (lastChar === '.' && buttonPressed === '.') return;

    switch (buttonPressed) {
      case '=':
        calculateAndSave();
        break;
      case 'C':
        setInputString('');
        break;
      case '<=':
        setInputString((lastValue) => {
          return lastValue.toString().slice(0, -1);
        });
        break;
      default:
        setInputString((prevState) => {
          return prevState + buttonPressed;
        });
    }

    function changeOperator(): string | void {
      if (buttonPressed === lastChar) {
        return;
      } else {
        setInputString((lastValue) => {
          return lastValue.slice(0, -1) + buttonPressed;
        });
        return;
      }
    }
  }

  return (
    <PageLayout className="main-page__layout-container" data-cy="main-page-layout">
      <div className="main-page__section_left">
        <DisplayComponent input={inputString} />
        <NumpadComponent handleClick={handleClick} />
      </div>
      <HistoryComponent />
    </PageLayout>
  );
}
