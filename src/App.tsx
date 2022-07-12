import Header from 'components/header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { darkTheme, lightTheme, RouterPaths, Themes } from 'constants/constants';
import { MainPage } from 'pages/mainPage';
import { SettingsPage } from 'pages/settingsPage';
import { Page404 } from 'pages/page404';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

function App() {
  const [currentTheme, setCurrentTheme] = useState(Themes.LIGHT);

  function getTheme() {
    switch (currentTheme) {
      case Themes.LIGHT:
        return lightTheme;
      case Themes.DARK:
        return darkTheme;
    }
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={getTheme()}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to={RouterPaths.MAIN} />} />
          <Route path={RouterPaths.MAIN} element={<MainPage />} />
          <Route
            path={RouterPaths.SETTINGS}
            element={<SettingsPage setTheme={setCurrentTheme} />}
          />
          <Route path={RouterPaths.WILDCARD} element={<Page404 />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
