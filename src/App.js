// import logo from './logo.svg';
// import './App.css';
// import './assets/fonts/CeraPro/stylesheet.css';
// import Home from "components/Home/Home"
// import SideMenu from 'components/SideMenu/SideMenu';
// import 'react-modern-drawer/dist/index.css'
// import Drawer from 'react-modern-drawer'
// import { useState } from 'react';
// const sideMenu = [
//   { name: "HOME", url: "/private/loans" },
//   { name: "About Us", url: "/private/cards" },
//   { name: "Investment", url: "/private/deposits" },
//   { name: "Leadership", url: "/private/services" },
//   { name: "Contact", url: "/private/services" },
// ];
// function App() {
//   const [isOpen, setIsOpen] = useState(false)
//   const toggleDrawer = () => {
//     setIsOpen((prevState) => !prevState)
//   }
//   return (
//     <div className="App">
//       <Drawer
//         open={isOpen}
//         onClose={toggleDrawer}
//         direction='left'
//         className='side-drawer-class'
//         size={"var(--side-drawer-width)"}
//       >
//         <SideMenu toggleDrawer={toggleDrawer} menuList={sideMenu}></SideMenu>
//       </Drawer>
//       {/* <SideMenu overlayColor="#303030" data={sideMenu} width={400} /> */}
//       <Home toggleDrawer={toggleDrawer}></Home>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Drawer from "react-modern-drawer";
import "./App.css"; // Assuming this contains your global styles
import "react-modern-drawer/dist/index.css"; // Assuming this contains drawer styles
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SideMenu from "./components/SideMenu/SideMenu"; // Assuming the path is correct
import InvesmentLeadership from "./components/InvesmentPage/InvesmentLeadership";
import AOS from "aos";
import "aos/dist/aos.css";
import LeadershipComponent from "components/Leadershippage/LeadershipComponent";
import ContactUs from "components/Contactuspage/ContactUs";

const sideMenu = [
  { name: "HOME", url: "/" },
  { name: "About Us", url: "/about-us" },
  { name: "Investment", url: "/investment" },
  { name: "Leadership", url: "/leadership" },
  { name: "Contact", url: "/contact-us" },
  // Add other menu items as needed
];

function App() {
  useEffect(() => {
    AOS.init(); // initialize the library
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  // Determine if current route is the home page
  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      {!isHomePage && <Header toggleDrawer={toggleDrawer} />}

      <Drawer
        open={isOpen}
        onClose={closeDrawer}
        direction="left"
        className="side-drawer-class" // Add your custom drawer class here
        size={766} // Set your preferred size
      >
        <SideMenu toggleDrawer={toggleDrawer} menuList={sideMenu} />
      </Drawer>

      <Routes>
        <Route path="/" element={<Home toggleDrawer={toggleDrawer} />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/investment" element={<InvesmentLeadership />} />

        <Route path="/leadership" element={<LeadershipComponent />} />
        <Route path="/Contact-us" element={<ContactUs />} />
        {/* Add more routes for other components */}
      </Routes>

      {!isHomePage && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
