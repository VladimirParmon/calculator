import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.secondary};
  border: 1px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.accent};
  cursor: pointer;
  overflow: hidden;
  outline: none;
  line-height: 20px;
  font-size: 20px;
  border-radius: 6px;
  width: 250px;
  padding: 20px;
  text-align: left;
`;
