import { RouterPaths } from 'constants/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [currentPage, setCurrentPage] = useState(RouterPaths.MAIN);
  return (
    <header>
      <span>Calculator App</span>
      <span className="spacer"></span>
      <div>
        <Link to={RouterPaths.MAIN}>
          <button>Home</button>
        </Link>
        <Link to={RouterPaths.SETTINGS}>
          <button>Settings</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
