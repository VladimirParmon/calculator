import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import {
  StyledHistoryHeading,
  StyledHistoryContainer,
  StyledHistorySpan,
  MessageOnEmpty
} from './components';

export function HistoryComponent() {
  const history = useSelector((state: RootState) => state.history.value);
  return (
    <StyledHistoryContainer className="history">
      <StyledHistoryHeading>History</StyledHistoryHeading>
      {history.length ? (
        history.map((line: string) => <StyledHistorySpan key={line}>{line}</StyledHistorySpan>)
      ) : (
        <MessageOnEmpty>Nothing to show yet</MessageOnEmpty>
      )}
    </StyledHistoryContainer>
  );
}
