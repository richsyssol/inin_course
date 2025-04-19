import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default layout;
