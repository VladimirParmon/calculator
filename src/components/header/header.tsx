import { RouterPaths } from 'constants/constants';
import { Link, useLocation } from 'react-router-dom';
import { StyledHeader, Spacer, HeaderButton, HeaderLogoSpan } from './component';

function Header() {
  let currentPage = useLocation().pathname.replace('/', '');

  return (
    <StyledHeader data-cy="header">
      <HeaderLogoSpan>Calculator App</HeaderLogoSpan>
      <Spacer></Spacer>
      <div>
        <Link to={RouterPaths.MAIN}>
          <HeaderButton
            active={currentPage === RouterPaths.MAIN}
            onClick={() => (currentPage = RouterPaths.MAIN)}
          >
            Home
          </HeaderButton>
        </Link>
        <Link to={RouterPaths.SETTINGS}>
          <HeaderButton
            active={currentPage === RouterPaths.SETTINGS}
            onClick={() => (currentPage = RouterPaths.SETTINGS)}
          >
            Settings
          </HeaderButton>
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
