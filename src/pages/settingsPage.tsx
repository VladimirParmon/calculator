import { Themes } from 'constants/constants';
import { useState } from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const SettingsStyledButton = styled.button`
  background-color: lightgrey;
  border: 1px solid black;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: black;
  line-height: 20px;
  font-size: 20px;
  border-radius: 6px;
  width: 250px;
  padding: 20px;
  text-align: left;
`;

const DropDownContainer = styled.div`
  width: 250px;
`;

const DropDownHeader = styled.div`
  margin-bottom: 0.3em;
  padding: 20px;
  line-height: 20px;
  font-size: 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropDownListContainer = styled.div``;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0 0 15px 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  color: black;
  font-size: 1.3rem;
  border-radius: 6px;
  & li:not(:last-of-type) {
    border-bottom: 1px solid #e5e5e5;
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

export function SettingsPage(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(Themes.LIGHT);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: Themes) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    //TODO send to parent
  };

  return (
    <SettingsContainer>
      <h1>Settings page</h1>
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
      <SettingsStyledButton>Clear All History</SettingsStyledButton>
    </SettingsContainer>
  );
}
