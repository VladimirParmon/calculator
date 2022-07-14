import { selectHistory } from 'redux/historySlice';
import { useAppSelector } from 'redux/hooks';
import {
  StyledHistoryHeading,
  StyledHistoryContainer,
  StyledHistorySpan,
  MessageOnEmpty
} from './components';

export function HistoryComponent() {
  const history = useAppSelector(selectHistory);
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
