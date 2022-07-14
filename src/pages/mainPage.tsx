import React /*, { useState }*/ from 'react';
import { DisplayComponent } from 'components/display/display';
import HistoryComponent from 'components/history/history';
import { NumpadComponent } from 'containers/numpadComponent';
import { expressionCalculator } from 'utils/calculator';
import { addToHistory } from 'redux/historySlice';
//import { useAppDispatch } from 'redux/hooks';
import { PageLayout } from 'layouts';
import { AppDispatch /*, RootState*/ } from 'redux/store';
import { connect } from 'react-redux';

// export function MainPage() {
//   const [inputString, setInputString] = useState('');
//   const dispatch = useAppDispatch();

//   function calculate(): void {
//     try {
//       const result = expressionCalculator(inputString);
//       if (result) {
//         dispatch(addToHistory(inputString));
//         setInputString(result);
//       }
//     } catch (err: unknown) {
//       alert(err);
//     }
//   }

//   function handleClick(buttonPressed: string): void {
//     const lastChar = inputString.toString().charAt(inputString.length - 1);

//     if (lastChar && lastChar.match(/[-+/*%]/g) && buttonPressed.match(/[-+/*%]/g)) {
//       if (buttonPressed === lastChar) {
//         return;
//       } else {
//         setInputString((lastValue) => {
//           return lastValue.slice(0, -1) + buttonPressed;
//         });
//         return;
//       }
//     }

//     switch (buttonPressed) {
//       case '=':
//         calculate();
//         break;
//       case 'C':
//         setInputString('');
//         break;
//       case '<=':
//         setInputString((lastValue) => {
//           return lastValue.toString().slice(0, -1);
//         });
//         break;
//       default:
//         setInputString((prevState) => {
//           return prevState + buttonPressed;
//         });
//     }
//   }

//   return (
//     <PageLayout className="layout">
//       <div className="left">
//         <DisplayComponent input={inputString} />
//         <NumpadComponent handleClick={handleClick} />
//       </div>
//       <HistoryComponent />
//     </PageLayout>
//   );
// }

class MainPage extends React.Component<{ dispatch: AppDispatch }, { inputString: string }> {
  constructor(props: { dispatch: AppDispatch }) {
    super(props);
    this.state = {
      inputString: ''
    };
  }

  calculate = (): void => {
    try {
      const result = expressionCalculator(this.state.inputString);
      if (result) {
        this.props.dispatch(addToHistory(this.state.inputString));
        this.setState({ inputString: result });
      }
    } catch (err: unknown) {
      alert(err);
    }
  };

  handleClick = (buttonPressed: string): void => {
    const inputS = this.state.inputString.toString();
    const lastChar = inputS.charAt(inputS.length - 1);

    if (lastChar && lastChar.match(/[-+/*%]/g) && buttonPressed.match(/[-+/*%]/g)) {
      if (buttonPressed === lastChar) {
        return;
      } else {
        this.setState((prevState) => {
          return {
            inputString: prevState.inputString.slice(0, -1) + buttonPressed
          };
        });
        return;
      }
    }

    switch (buttonPressed) {
      case '=':
        this.calculate();
        break;
      case 'C':
        this.setState({ inputString: '' });
        break;
      case '<=':
        this.setState((prevState) => {
          return {
            inputString: prevState.inputString.slice(0, -1)
          };
        });
        break;
      default:
        this.setState((prevState) => {
          return {
            inputString: prevState.inputString + buttonPressed
          };
        });
    }
  };

  render() {
    return (
      <PageLayout className="layout">
        <div className="left">
          <DisplayComponent input={this.state.inputString} />
          <NumpadComponent handleClick={this.handleClick} />
        </div>
        <HistoryComponent />
      </PageLayout>
    );
  }
}

export default connect()(MainPage);
