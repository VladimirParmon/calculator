import CustomButtonComponent from 'components/customButton';
import DropdownComponent from 'components/dropdown';
import { Themes } from 'constants/constants';
import { clearHistory } from 'redux/historySlice';
import { useAppDispatch } from 'redux/hooks';
import styled from 'styled-components';

const SettingsStyledHeading = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const SettingsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primary};
`;

export function SettingsPage(props: { setTheme: React.Dispatch<React.SetStateAction<Themes>> }) {
  const options = [Themes.LIGHT, Themes.DARK];
  const dispatch = useAppDispatch();

  const clear = () => () => {
    alert('History cleared!');
    dispatch(clearHistory());
  };

  const choiceHandler = (value: Themes) => {
    props.setTheme(value);
  };

  return (
    <SettingsContainer>
      <SettingsStyledHeading>Settings page</SettingsStyledHeading>
      <DropdownComponent options={options} choiceHandler={choiceHandler} />
      <CustomButtonComponent clickAction={clear()}>Clear All History</CustomButtonComponent>
    </SettingsContainer>
  );
}
