import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootsLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 className={"nav-bar"}>Navbar</h1>
          <div>
            <NavLink to="/">HOME </NavLink>
            <NavLink to="about"> ABOUT</NavLink>
            <NavLink to="help">HELP</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootsLayout;
