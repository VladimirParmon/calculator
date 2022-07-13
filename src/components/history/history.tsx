import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { StyledHistoryHeading, StyledHistoryContainer, StyledHistorySpan } from './components';

export function HistoryComponent() {
  const history = useSelector((state: RootState) => state.history.value);
  return (
    <StyledHistoryContainer>
      <StyledHistoryHeading>History</StyledHistoryHeading>
      {history.map((line: string) => (
        <StyledHistorySpan key={line}>{line}</StyledHistorySpan>
      ))}
    </StyledHistoryContainer>
  );
}
