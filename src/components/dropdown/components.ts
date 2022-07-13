import styled from 'styled-components';

const DropDownContainer = styled.div`
  width: 250px;
`;

const DropDownHeader = styled.div`
  margin-bottom: 0.3em;
  padding: 20px;
  line-height: 20px;
  font-size: 20px;
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.fontColor};
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  span {
    user-select: none;
  }
`;

const DropDownListContainer = styled.div``;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0 0 15px 0;
  background-color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.fontColor};
  font-size: 1.3rem;
  border-radius: 6px;
  & li:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.accent};
  }
`;

const ListItem = styled.li`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  list-style: none;
  cursor: pointer;
`;

const Spacer = styled.span`
  flex-grow: 1;
`;

const Icon = styled.span`
  cursor: pointer;
`;

export {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Spacer,
  Icon
};
