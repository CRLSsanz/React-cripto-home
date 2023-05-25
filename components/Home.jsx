import React from "react";
import {
  RiXboxFill,
  RiStarLine,
  RiUpload2Line,
  RiCupLine,
} from "react-icons/ri";

export const Home = () => {
  return (
    <div className="container">
      <div className="flex px-4 py-2 text-xs font-semibold text-gray-500 gap-2 border-b">
        <div className="flex">
          Criptomonedas: <p className="text-blue-500"> 240</p>
        </div>
        <div className="">Intercambios: 218</div>
        <div>Cap. de Mercado: $1,</div>
      </div>
      <div className="p-4">
        <div className="py-2 flex justify-between items-center">
          <div>
            <div className="text-2xl">
              <RiXboxFill />
            </div>
          </div>
          <div className="text-base flex items-center">
            <button className="btn-1 text-gray-500 mr-2">
              <RiStarLine />
            </button>
            <button className="btn-1 text-gray-500 mr-2">
              <RiUpload2Line />
            </button>
            <button className="btn-1 bg-blue-600 text-white text-xs">
              + Seguir
            </button>
          </div>
        </div>
        <div className="py-4 flex flex-row text-xs gap-2">
          <div className="bg-gray-300 py-1 px-2 rounded-md ">Puesto #6</div>
          <div className="bg-gray-300 py-1 px-2 rounded-md ">Moneda</div>
          <div className="bg-gray-300 py-1 px-2 rounded-sm ">
            On, 1,862,195 watchlists
          </div>
        </div>
        <div className="py-4 flex text-sm">
          <h1>Precio de XRP</h1> <h1 className="text-gray-500"> (XRP)</h1>
        </div>
        <div className="py-4 flex justify-between items-center ">
          <h1 className="text-3xl font-bold">$0.4606</h1>
          <h1 className="bg-red-400 text-sm rounded-md p-1 px-2 text-white">
            -0.23%
          </h1>
        </div>
        <div className="py-4 text-gray-400 p-4 flex justify-between items-center text-xs ">
          <h1>
            Disminuir:<span className="text-gray-900">$.04542</span>{" "}
          </h1>
          <h1>
            Elevar:<span className="text-gray-900">$.04668</span>{" "}
          </h1>
          <h1 className="bg-gray-200 rounded-md p-1 px-2">24horas -</h1>
        </div>
        <div className="py-4 ">
          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-gray-400 h-1.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>
        <div className="py-4 ">
          <h1 className="bg-gray-100 text-sm p-2 rounded-md text-center">
            Mas estadisticas
          </h1>
        </div>
      </div>

      <div className="p-4">
        <div className="py-4 border-t border-b">
          <div className="text-xs flex flex-wrap sm:bg-red-400 gap-1">
            <button className="btn-1 bg-blue-600 text-gray-200">
              Comprar ^
            </button>
            <button className=" btn-1 bg-blue-600 text-gray-200">
              Cambiar -
            </button>
            <button className="btn-1 bg-blue-600 text-gray-200">Jugar -</button>
            <button className="btn-1 bg-blue-600 text-gray-200">
              Gana criptomonedas -
            </button>
          </div>
          <div className="text-xs flex justify-end">Sponsored</div>
        </div>

        <div className="py-4 text-xs flex justify-between items-center border-b">
          <div className="text-sm">Enlaces</div>
          <div>SitioWeb, exploradores, Redes sociales, etc.</div>
        </div>

        <div className="py-4 text-xs flex justify-between items-center border-b">
          <div className="text-sm">Contratos</div>
          <div>
            <h1>BNB Smart Chain (BEP20): </h1>
            <h1>0x1d2f...6c60dbe</h1>
          </div>
          <div className="text-xl text-gray-400">
            <RiCupLine />
          </div>
        </div>
      </div>
    </div>
  );
};
