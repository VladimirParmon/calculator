import { RouterPaths } from 'constants/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #434343;
  padding: 15px;
  color: white;
`;

const Spacer = styled.span`
  flex-grow: 1;
`;

const HeaderButton = styled.button<{
  active: boolean;
}>`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: white;
  line-height: 20px;
  ${(props) =>
    props.active &&
    css`
      &:after {
        content: '';
        height: 2px;
        display: block;
        margin-top: 2px;
        background-color: white;
        text-decoration: underline;
      }
    `}
`;

function Header() {
  const [currentPage, setCurrentPage] = useState(RouterPaths.MAIN);
  return (
    <StyledHeader>
      <span>Calculator App</span>
      <Spacer></Spacer>
      <div>
        <Link to={RouterPaths.MAIN}>
          <HeaderButton
            active={currentPage === RouterPaths.MAIN}
            onClick={() => setCurrentPage(RouterPaths.MAIN)}
          >
            Home
          </HeaderButton>
        </Link>
        <Link to={RouterPaths.SETTINGS}>
          <HeaderButton
            active={currentPage === RouterPaths.SETTINGS}
            onClick={() => setCurrentPage(RouterPaths.SETTINGS)}
          >
            Settings
          </HeaderButton>
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
