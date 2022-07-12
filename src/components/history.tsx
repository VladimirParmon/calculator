import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledHistoryHeading = styled.h2`
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  color: ${(props) => props.theme.fontColor};
`;

const StyledHistoryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border-left: 2px solid ${(props) => props.theme.accent};
`;

const StyledHistorySpan = styled.span`
  margin-left: 50px;
  padding: 10px;
  font-size: 30px;
  color: ${(props) => props.theme.fontColor};
`;

export function HistoryComponent() {
  const history = useSelector((state: any) => state.history.value);
  return (
    <StyledHistoryContainer>
      <StyledHistoryHeading>History</StyledHistoryHeading>
      {history.map((line: string) => (
        <StyledHistorySpan key={line}>{line}</StyledHistorySpan>
      ))}
    </StyledHistoryContainer>
  );
}
