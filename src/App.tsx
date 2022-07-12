import { PageLayout } from 'layouts';
import Header from 'components/header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RouterPaths } from 'constants/constants';
import { MainPage } from 'pages/mainPage';
import { SettingsPage } from 'pages/settingsPage';
import { Page404 } from 'pages/page404';

function App() {
  return (
    <PageLayout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to={RouterPaths.MAIN} />} />
          <Route path={RouterPaths.MAIN} element={<MainPage />} />
          <Route path={RouterPaths.SETTINGS} element={<SettingsPage />} />
          <Route path={RouterPaths.WILDCARD} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </PageLayout>
  );
}

export default App;
