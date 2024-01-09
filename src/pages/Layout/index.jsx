import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "antd-mobile";

function Layout() {
  return (
    <div>
      Layout
      <div></div>
      <Button color="primary">clcik</Button>
      <div className="purple">
        <Button color="primary">clcik</Button>
      </div>
      {<Outlet />}
    </div>
  );
}

export default Layout;
