import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#120747]">
      <nav className="flex justify-between items-center w-[95%] mx-auto pt-5 pb-5 ">
        <div>
          <h1 className="text-3xl text-white">CRYPTODUNIA</h1>
        </div>
        <div class="md:static absolute bg-[#120747] md:min-h-fit min-h-[60vh] left-0 top-[10%] md:w-auto w-full flex items-center pl-5">
          <ul className="flex md:flex-row flex-col md:items-center gap-10 bg-[#120747] text-white ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </li>
            <li>
              <Link to="/exchanges">Exchanges</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
