import axios from "axios";
import React, { useContext, useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import CrudContext from "../context/CrudContext";
import $ from "jquery";

const bd = [
  {
    lav_id: "1",
    cus_name: "Davide Trecentoundici",
    typ_description: "Doctor",
    lav_total: "250.00",
    lav_pay: "150.00",
    lav_datefin: "2023-03-05",
  },
  {
    lav_id: "2",
    cus_name: "Maria Teresa",
    typ_description: "Moratore",
    lav_total: "100.00",
    lav_pay: "0",
    lav_datefin: "2023-02-05",
  },
  {
    lav_id: "3",
    cus_name: "Moreno Joao",
    typ_description: "Farmacia",
    lav_total: "350.00",
    lav_pay: "0.00",
    lav_datefin: "2023-05-05",
  },
  {
    lav_id: "1",
    cus_name: "Davide",
    typ_description: "Electricidad",
    lav_total: "250.00",
    lav_pay: "250.00",
    lav_datefin: "2023-04-05",
  },
  {
    lav_id: "2",
    cus_name: "Maria Teresa",
    typ_description: "Carpintero",
    lav_total: "100.00",
    lav_pay: "100.00",
    lav_datefin: "2023-05-05",
  },
  {
    lav_id: "3",
    cus_name: "Modeno Joao",
    typ_description: "Farmacia",
    lav_total: "350.00",
    lav_pay: "50.00",
    lav_datefin: "2023-05-05",
  },
];

export const Page1 = () => {
  const { products } = useContext(CrudContext);

  useEffect(() => {
    //getPrueba();
  }, []);

  const newLavoro = () => {
    //setLavoroToEdit(null);
  };

  return (
    <div className="container">
      {/**<div className=" w-[540px] sm:w-[700px]  md:w-[950px] lg:w-[1200px]">  */}
      {/**  sm: min'640px' // md: min'768px'  //   lg: min'1024px'  // xl: min'1280px', al final xl:w-[1400px] */}
      <div className="">
        <h1 className="text-2xl font-extrabold pt-4 text-gray-700 ">
          List Products
        </h1>
        <h1 className="text-lg pb-4 text-gray-700 ">
          Utilities for controlling an element's background color.
        </h1>
        <div className="mb-4">
          <Link to={`../lavoro1/lav/create`}>
            <button
              onClick={() => newLavoro()}
              className="btn-1 hover:scale-95 transition"
            >
              New Product
            </button>
          </Link>
        </div>
        <div className="text-2xl"></div>
        {/**CARD*/}
        <div className="p-4 w-full bg-gray-50">
          <table className="w-full">
            <thead className="text-sm bg-gray-100">
              <tr className="border-b">
                <th className="p-3">ID</th>
                <th className="p-3">NAME</th>
                <th className="p-3">#</th>
                <th className="p-3">COLOR</th>
                <th className="p-3">PANTONE</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products?.map((item, key) => (
                  <tr key={key} className="bg-gray-50 border-b">
                    <td className="p-2 px-4">{item.id} </td>
                    <td className="p-2 font-medium">
                      {item.name} <br />
                      <span className="text-sm text-gray-500">{item.year}</span>
                    </td>
                    <td className="p-2">
                      <div
                        className={`h-3 w-3 rounded-full bg-[${item.color}]`}
                      ></div>
                    </td>
                    <td className={`p-2 bg-[${item.color}]`}>{item.color}</td>
                    <td className="p-2">{item.pantone_value} </td>
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
