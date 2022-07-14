//import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import {
  StyledHistoryHeading,
  StyledHistoryContainer,
  StyledHistorySpan,
  MessageOnEmpty
} from './components';

// export function HistoryComponent() {
//   const history = useSelector((state: RootState) => state.history.value);
//   return (
//     <StyledHistoryContainer data-cy="history" className="history">
//       <StyledHistoryHeading>History</StyledHistoryHeading>
//       {history.length ? (
//         history.map((line: string) => <StyledHistorySpan key={line}>{line}</StyledHistorySpan>)
//       ) : (
//         <MessageOnEmpty>Nothing to show yet</MessageOnEmpty>
//       )}
//     </StyledHistoryContainer>
//   );
// }

import React from 'react';
import { connect } from 'react-redux';
import { selectHistory } from 'redux/historySlice';

class HistoryComponent extends React.Component<{ history: string[] }> {
  render() {
    return (
      <StyledHistoryContainer data-cy="history" className="history">
        <StyledHistoryHeading>History</StyledHistoryHeading>
        {this.props.history.length ? (
          this.props.history.map((line: string, i: number) => (
            <StyledHistorySpan key={line + i}>{line}</StyledHistorySpan>
          ))
        ) : (
          <MessageOnEmpty>Nothing to show yet</MessageOnEmpty>
        )}
      </StyledHistoryContainer>
    );
  }
}

const mapStateToProps = function (state: RootState) {
  return {
    history: selectHistory(state)
  };
};

export default connect(mapStateToProps)(HistoryComponent);
