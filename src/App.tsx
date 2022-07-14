import Header from 'components/header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { darkTheme, lightTheme, RouterPaths, Themes } from 'constants/constants';
import MainPage from 'pages/mainPage';
import SettingsPage from 'pages/settingsPage';
import { Page404 } from 'pages/page404';
//import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from 'containers/errorBoundary';
import React from 'react';

// function App() {
//   const [currentTheme, setCurrentTheme] = useState(Themes.LIGHT);

//   function getTheme() {
//     switch (currentTheme) {
//       case Themes.LIGHT:
//         return lightTheme;
//       case Themes.DARK:
//         return darkTheme;
//     }
//   }

//   return (
//     <ErrorBoundary>
//       <BrowserRouter>
//         <ThemeProvider theme={getTheme()}>
//           <Header />
//           <Routes>
//             <Route path="/" element={<Navigate replace to={RouterPaths.MAIN} />} />
//             <Route path={RouterPaths.MAIN} element={<MainPage />} />
//             <Route
//               path={RouterPaths.SETTINGS}
//               element={<SettingsPage setTheme={setCurrentTheme} />}
//             />
//             <Route path={RouterPaths.WILDCARD} element={<Page404 />} />
//           </Routes>
//         </ThemeProvider>
//       </BrowserRouter>
//     </ErrorBoundary>
//   );
// }

class App extends React.Component<Record<string, never>, { currentTheme: Themes }> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      currentTheme: Themes.LIGHT
    };
  }
  getTheme = () => {
    switch (this.state.currentTheme) {
      case Themes.LIGHT:
        return lightTheme;
      case Themes.DARK:
        return darkTheme;
    }
  };

  setCurrentTheme = (theme: Themes): void => {
    this.setState({ currentTheme: theme });
  };

  render() {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <ThemeProvider theme={this.getTheme()}>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate replace to={RouterPaths.MAIN} />} />
              <Route path={RouterPaths.MAIN} element={<MainPage />} />
              <Route
                path={RouterPaths.SETTINGS}
                element={<SettingsPage setTheme={this.setCurrentTheme} />}
              />
              <Route path={RouterPaths.WILDCARD} element={<Page404 />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}

export default App;
