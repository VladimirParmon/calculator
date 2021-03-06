import styled from 'styled-components';

export const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  padding: 20px;
  overflow-x: hidden;
  box-sizing: border-box;
  gap: 15px;
  background-color: ${(props) => props.theme.primary};

  @media screen and (max-width: ${(props) => props.theme.media.toColumn}) {
    flex-direction: column;
  }
`;
