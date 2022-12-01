import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const MainLayOut = () => {
  return (
    <>
      <Menu></Menu>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayOut;
