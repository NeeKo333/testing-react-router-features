import React from "react";
import { Outlet } from "react-router-dom";

const MainLayOut = ({ menu }) => {
  return (
    <>
      {menu}
      <Outlet></Outlet>
    </>
  );
};

export default MainLayOut;
