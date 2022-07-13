import { useState } from 'react';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Spacer,
  Icon
} from './components';

export function DropdownComponent<T extends string>(props: {
  options: T[];
  choiceHandler: (value: T) => void;
}) {
  const { options, choiceHandler } = props;
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: T) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    choiceHandler(value);
  };
  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling} data-cy="select">
        <span>{selectedOption}</span>
        <Spacer></Spacer>
        <Icon>{isOpen ? '⏶' : '⏷'}</Icon>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option: T) => (
              <ListItem onClick={onOptionClicked(option)} key={option}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
