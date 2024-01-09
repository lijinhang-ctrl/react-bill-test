import React from "react";
import { Outlet } from "react-router-dom";

function Year() {
  return (
    <div>
      Year
      <Outlet />
    </div>
  );
}

export default Year;
