import styled from 'styled-components';

const StyledHistoryHeading = styled.h2`
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  color: ${(props) => props.theme.fontColor};
`;

const MessageOnEmpty = styled.span`
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;

const StyledHistoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border-left: 2px solid ${(props) => props.theme.accent};

  @media screen and (max-width: ${(props) => props.theme.media.toColumn}) {
    overflow-y: visible;
    min-height: 500px;
  }
`;

const StyledHistorySpan = styled.span`
  margin-left: 50px;
  padding: 10px;
  font-size: 30px;
  color: ${(props) => props.theme.fontColor};
`;

export { StyledHistoryHeading, StyledHistoryContainer, StyledHistorySpan, MessageOnEmpty };
