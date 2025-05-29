import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="sora">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
