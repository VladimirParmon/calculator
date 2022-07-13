import DropdownComponent from 'components/dropdown';
import { Themes } from 'constants/constants';
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
      <SettingsStyledButton onClick={clear()}>Clear All History</SettingsStyledButton>
    </SettingsContainer>
  );
}
