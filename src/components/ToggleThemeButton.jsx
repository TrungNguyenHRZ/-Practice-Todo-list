import { Button } from "antd";
import React from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="toggle-theme-btn">
      <Button className="toggle" onClick={toggleTheme}>
        {" "}
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};

export default ToggleThemeButton;
