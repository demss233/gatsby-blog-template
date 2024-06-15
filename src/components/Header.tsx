import * as React from "react";
import { navbarBrand, pageTitle } from "../consts";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full px-10 py-7">
        <div className="navbar-brand">
          <h1 className="text-2xl font-semibold text-white">{navbarBrand}</h1>
        </div>
        <div>
          <ul className="flex items-center gap-6 text-white">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
