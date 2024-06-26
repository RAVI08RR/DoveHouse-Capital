import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./sideMenu.css";
import { ReactComponent as Icon_Close } from "assets/menu_close.svg";
import img_drawerLogo from "assets/drawerLogo.svg";

const SideBarList = ({ data, toggleDrawer }) => (
  <div>
    <div className="sidemenu-close">
      <Icon_Close onClick={() => toggleDrawer()} width={56} height={56} />
    </div>
    {data.map((item, i) => (
      <div className="menu-item" key={i}>
        <NavLink to={item.url} onClick={toggleDrawer}>
          {item.name}
        </NavLink>
      </div>
    ))}
  </div>
);

export const SideMenu = ({ menuList, toggleDrawer }) => {
  return (
    <div
      className="sidemenu-container"
      style={{ backgroundImage: `url(${img_drawerLogo})` }}
    >
      <SideBarList data={menuList} toggleDrawer={toggleDrawer} />
      <div className="copywrite-text">
        © 2024 DoveHouse Capital Inc. All Rights Reserved.
      </div>
    </div>
  );
};

export default SideMenu;
