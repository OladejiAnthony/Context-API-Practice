import React, { useContext } from "react";
import "./Footer.css";
import ThemeContext from "../context/ThemeContext";

const Footer = () => {
  const { theme} = useContext(ThemeContext);

  return (
    <footer className="--flex-center" data-theme={theme}>
      <p>Copyright &copy; 2022.</p>
    </footer>
  );
};

export default Footer;
