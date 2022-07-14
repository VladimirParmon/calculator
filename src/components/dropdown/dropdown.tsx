import React from 'react';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Spacer,
  Icon
} from './components';

// export function DropdownComponent<T extends string>(props: {
//   options: T[];
//   choiceHandler: (value: T) => void;
// }) {
//   const { options, choiceHandler } = props;
//   const [selectedOption, setSelectedOption] = useState(options[0]);
//   const [isOpen, setIsOpen] = useState(false);

//   const toggling = () => setIsOpen(!isOpen);

//   const onOptionClicked = (value: T) => () => {
//     setSelectedOption(value);
//     setIsOpen(false);
//     choiceHandler(value);
//   };
//   return (
//     <DropDownContainer>
//       <DropDownHeader onClick={toggling} data-cy="select">
//         <span>{selectedOption}</span>
//         <Spacer></Spacer>
//         <Icon>{isOpen ? '⏶' : '⏷'}</Icon>
//       </DropDownHeader>
//       {isOpen && (
//         <DropDownListContainer>
//           <DropDownList>
//             {options.map((option: T) => (
//               <ListItem onClick={onOptionClicked(option)} key={option}>
//                 {option}
//               </ListItem>
//             ))}
//           </DropDownList>
//         </DropDownListContainer>
//       )}
//     </DropDownContainer>
//   );
// }

interface DropdownComponentProps<T> {
  options: T[];
  choiceHandler: (value: T) => void;
}

export class DropdownComponent<T extends string> extends React.Component<
  DropdownComponentProps<T>,
  { selectedOption: T; isOpen: boolean }
> {
  constructor(props: DropdownComponentProps<T>) {
    super(props);
    this.state = {
      isOpen: false,
      selectedOption: props.options[0]
    };
  }
  toggling = () =>
    this.setState((state) => {
      return { isOpen: !state.isOpen };
    });

  onOptionClicked = (value: T) => () => {
    this.setState((state) => {
      return { isOpen: !state.isOpen, selectedOption: value };
    });
    this.props.choiceHandler(value);
  };

  render() {
    return (
      <DropDownContainer>
        <DropDownHeader onClick={this.toggling} data-cy="select">
          <span>{this.state.selectedOption}</span>
          <Spacer></Spacer>
          <Icon>{this.state.isOpen ? '⏶' : '⏷'}</Icon>
        </DropDownHeader>
        {this.state.isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {this.props.options.map((option: T) => (
                <ListItem onClick={this.onOptionClicked(option)} key={option}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    );
  }
}
