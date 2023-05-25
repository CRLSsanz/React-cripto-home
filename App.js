import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import Header from "./components/Header";
import { CrudProvider } from "./context/CrudContext";

import fondo from "../src/image/fondo.jpg";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Home } from "./components/Home";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <CrudProvider>
      <div className="w-full min-h-screen">
        <Header />

        <BrowserRouter>
          <nav className="flexx justify-end hidden ">
            <ul className="text-white">
              <li className="inline-block pt-3 pr-3 hover:text-[#ec7c6a]">
                <Link to="/">List Lavoro</Link>
              </li>
              <li className="inline-block hover:text-[#ec7c6a]">
                <Link to="/lav/create">Create Lavoro</Link>
              </li>
            </ul>
          </nav>

          <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

          <Routes>
            <Route index element={<Home />} />
            <Route path="cripto/" element={<Home />} />
            <Route path="cripto/page1" element={<Page1 />} />
            <Route path="cripto/page2" element={<Page2 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CrudProvider>
  );
}

export default App;
