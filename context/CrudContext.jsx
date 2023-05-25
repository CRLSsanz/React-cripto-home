import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CrudContext = createContext();

const bdproducts = [
  {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
      {
        id: "1",
        name: "cerulean",
        year: "2000",
        color: "#98B2D1",
        pantone_value: "15-4020",
      },
      {
        id: "2",
        name: "fuchsia rose",
        year: "2001",
        color: "#C74375",
        pantone_value: "17-2031",
      },
      {
        id: "3",
        name: "true red",
        year: "2002",
        color: "#BF1932",
        pantone_value: "19-1664",
      },
      {
        id: "4",
        name: "aqua sky",
        year: "2003",
        color: "#7BC4C4",
        pantone_value: "14-4811",
      },
      {
        id: "5",
        name: "tigerlily",
        year: "2004",
        color: "#E2583E",
        pantone_value: "17-1456",
      },
      {
        id: "6",
        name: "blue turquoise",
        year: "2005",
        color: "#53B0AE",
        pantone_value: "15-5217",
      },
    ],
    support: {
      url: "https://reqres.in/#support-heading",
      text: "To keep ReqRes free, contributions towards server costs are appreciated!",
    },
  },
];

const bdusers = [
  {
    id: "1",
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: "2",
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: "3",
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: "4",
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: "5",
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: "6",
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
];

const CrudProvider = ({ children }) => {
  const [users, setUsers] = useState(bdusers);
  const [products, setProducts] = useState([]);
  //const [detailToEdit, setDetailToEdit] = useState(null);

  const url = "https://reqres.in/api";

  useEffect(() => {
    getProducts();
    //getUsers();
  }, []);

  function getProducts() {
    setProducts(bdproducts[0].data);
    /*axios.get(`${url}/products`).then(function (response) {
      //console.log(response.data);
      setProducts(response.data.data);
    }); */
  }
  function getUsers() {
    axios.get(`https://reqres.in/api/users/`).then(function (response) {
      console.log(response.data);
      setUsers(response.data.data);
    });
  }

  const data = {
    users,
    products,
  };

  return <CrudContext.Provider value={data}> {children} </CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
