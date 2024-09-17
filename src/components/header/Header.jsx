import "./header.css";

import { ReactComponent as HeaderLogo } from "assets/headerlogo.svg";
import { ReactComponent as IconMenu } from "assets/menu_icon_dark.svg";

const Header = (props) => {
  return (
    <div className="header-container">
      <div>
        {" "}
        <IconMenu
          className="header-menu-icon"
          onClick={() => {
            props.toggleDrawer();
          }}
        ></IconMenu>
      </div>

      <HeaderLogo className="header-logo"></HeaderLogo>
    </div>
  );
};
export default Header;
