import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CrudContext from "../context/CrudContext";

export const Page2 = () => {
  const { users } = useContext(CrudContext);
  console.log(users);

  return (
    <div className="container">
      <div className="">
        <h1 className="text-2xl font-extrabold pt-6 text-gray-700 ">
          List Users
        </h1>
        <h1 className="text-lg pb-6 text-gray-700 ">
          Utilities for controlling an element's background color.
        </h1>
        <div className="mb-4">
          <Link to={`../lavoro1/lav/create`}>
            <button
              onClick={() => "newLavoro()"}
              className="btn-1 hover:scale-95 transition"
            >
              New User
            </button>
          </Link>
        </div>
        <div className="text-2xl"></div>
        {/**CARD*/}
        <div className="p-4 bg-gray-50">
          <table className="w-full">
            <thead className="text-sm bg-gray-100">
              <tr className="border-b">
                <th className="p-2">ID</th>
                <th colSpan={"2"} className="p-2 text-left ">
                  DESCRIPTION
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users?.map((item, key) => (
                  <tr key={key} className="bg-gray-50 items-center border-b">
                    <td className="p-2 px-4 text-center">{item.id} </td>
                    <td className="p-2 w-[64px] items-center">
                      <img
                        src={item.avatar}
                        className="rounded-full"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td className="p-2 pl-4">
                      {item.first_name} {item.last_name} <br />
                      <span className="text-sm text-gray-500 ">
                        {item.email}{" "}
                      </span>{" "}
                    </td>
                  </tr>
                ))
              ) : (
                <div>Sin datos</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
