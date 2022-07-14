import { useSelector } from 'react-redux';
import { selectHistory } from 'redux/historySlice';
import {
  StyledHistoryHeading,
  StyledHistoryContainer,
  StyledHistorySpan,
  MessageOnEmpty
} from './components';

export function HistoryComponent() {
  const history = useSelector(selectHistory);
  return (
    <StyledHistoryContainer data-cy="history" className="history">
      <StyledHistoryHeading>History</StyledHistoryHeading>
      {history.length ? (
        history.map((line: string, i: number) => (
          <StyledHistorySpan key={line + i}>{line}</StyledHistorySpan>
        ))
      ) : (
        <MessageOnEmpty>Nothing to show yet</MessageOnEmpty>
      )}
    </StyledHistoryContainer>
  );
}
