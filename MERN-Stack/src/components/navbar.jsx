import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/orders"> order History </NavLink>
        </li>
        <li>
          <NavLink to="/orders/new">New order </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
