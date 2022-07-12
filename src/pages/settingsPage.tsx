import { Themes } from 'constants/constants';
import { useState } from 'react';
import { clearHistory } from 'redux/historySlice';
import { useAppDispatch } from 'redux/hooks';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primary};
`;

const SettingsStyledButton = styled.button`
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

const SettingsStyledHeading = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

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

const options = [Themes.LIGHT, Themes.DARK];

export function SettingsPage(props: { setTheme: React.Dispatch<React.SetStateAction<Themes>> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(Themes.LIGHT);
  const dispatch = useAppDispatch();

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: Themes) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    props.setTheme(value);
  };

  const clear = () => () => {
    alert('History cleared!');
    dispatch(clearHistory());
  };

  return (
    <SettingsContainer>
      <SettingsStyledHeading>Settings page</SettingsStyledHeading>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          <span>{selectedOption}</span>
          <Spacer></Spacer>
          <Icon>{isOpen ? '⏶' : '⏷'}</Icon>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={option}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      <SettingsStyledButton onClick={clear()}>Clear All History</SettingsStyledButton>
    </SettingsContainer>
  );
}
