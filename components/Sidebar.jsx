import React from "react";
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../image/logo.png";

export const Sidebar = (props) => {
  const { showMenu, setShowMenu } = props;
  return (
    <div>
      <div
        className={`bg-[#1f1d2bbd] fixed lg:left-0 border-0 top-0 w-28 h-full flex flex-col justify-between py-6 
      rounded-bl-xl rounded-tr-xl z-60 transition-all 
                        ${showMenu ? "right-0" : "-left-full"}`}
      >
        <div>
          <ul className="pl-4">
            <li>
              <h1 className="text-2xl text-gray-300 uppercase font-bold text-center mb-5">
                <img
                  src={logo}
                  width={"96px"}
                  height={"96px"}
                  className="rounded-full"
                />
              </h1>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
              <Link
                onClick={() => setShowMenu((prev) => !prev)}
                to={"navbar1/"}
                className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
              >
                <RiHome6Line className="text-2xl" />
              </Link>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <Link
                onClick={() => setShowMenu((prev) => !prev)}
                to={"navbar1/page1"}
                className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
              >
                {/**  className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"*/}
                <RiPercentLine className="text-2xl" />
              </Link>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <Link
                onClick={() => setShowMenu((prev) => !prev)}
                to={"navbar1/page2"}
                className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
              >
                <RiPieChartLine className="text-2xl" />
              </Link>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <Link
                onClick={() => setShowMenu((prev) => !prev)}
                to={"navbar1/details"}
                className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
              >
                <RiMailLine className="text-2xl" />
              </Link>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <Link
                onClick={() => setShowMenu((prev) => !prev)}
                to={"navbar1/details"}
                className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
              >
                <RiNotification3Line className="text-2xl" />
              </Link>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <Link
                onClick={() => setShowMenu((prev) => !prev)}
                to={"navbar1/details"}
                className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
              >
                <RiSettings4Line className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pl-4">
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <a
                href="/#"
                className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
              >
                <RiLogoutCircleRLine className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
