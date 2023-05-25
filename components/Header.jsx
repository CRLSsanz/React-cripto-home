import React from "react";
import {
  RiMoneyPoundCircleLine,
  RiSearchLine,
  RiMenuLine,
  RiDislikeLine,
} from "react-icons/ri";

//const cargarImagen = require.context("../image", true);
//const nombre_imagen = 'comida';

const Header = ({ handleSearch }) => {
  return (
    <header className="container">
      {/* <img src={cargarImagen(`./${nombre_imagen}.png`)} alt={nombre_imagen} /> */}
      {/* Title and search */}
      <nav className="w-full p-3 flex flex-row justify-between text-base border-b">
        <div className="flex items-center">
          <div className="pr-2 text-3xl">
            <RiMoneyPoundCircleLine />
          </div>
          <div className="font-bold">CoinMarketCap</div>
        </div>
        <div className="flex items-center text-2xl">
          <div className="px-2">
            <RiSearchLine />
          </div>
          <div className="px-4">
            <RiDislikeLine />
          </div>
          <div className="pl-2">
            <RiMenuLine />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
