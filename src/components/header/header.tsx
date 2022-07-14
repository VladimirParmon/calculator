import { RouterPaths } from 'constants/constants';
import React, { ComponentType } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledHeader, Spacer, HeaderButton, HeaderLogoSpan } from './component';

// function Header() {
//   const currentPage = useLocation().pathname.replace('/', '');

//   return (
//     <StyledHeader data-cy="header">
//       <HeaderLogoSpan>Calculator App</HeaderLogoSpan>
//       <Spacer></Spacer>
//       <div>
//         <Link to={RouterPaths.MAIN}>
//           <HeaderButton active={currentPage === RouterPaths.MAIN}>Home</HeaderButton>
//         </Link>
//         <Link to={RouterPaths.SETTINGS}>
//           <HeaderButton active={currentPage === RouterPaths.SETTINGS}>Settings</HeaderButton>
//         </Link>
//       </div>
//     </StyledHeader>
//   );
// }

//React v6
function withLocation(WrappedComponent: ComponentType<{ currentPage: string }>) {
  return function Wrapper() {
    const currentPage = useLocation().pathname.replace('/', '');
    return <WrappedComponent currentPage={currentPage} />;
  };
}

// React v5
// import { withRouter } from "react-router";
// const Header = withRouter(HeaderComponent);
// ...const { match, location, history } = this.props

class HeaderComponent extends React.Component<{ currentPage: string }, Record<string, never>> {
  render() {
    return (
      <StyledHeader data-cy="header">
        <HeaderLogoSpan>Calculator App</HeaderLogoSpan>
        <Spacer></Spacer>
        <div>
          <Link to={RouterPaths.MAIN}>
            <HeaderButton active={this.props.currentPage === RouterPaths.MAIN}>Home</HeaderButton>
          </Link>
          <Link to={RouterPaths.SETTINGS}>
            <HeaderButton active={this.props.currentPage === RouterPaths.SETTINGS}>
              Settings
            </HeaderButton>
          </Link>
        </div>
      </StyledHeader>
    );
  }
}

export const Header = withLocation(HeaderComponent);

export default Header;
