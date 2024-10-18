import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomepageVOne from "pages/HomepageVOne";
import HomepageVTwo from "pages/HomepageVTwo";
import HomepageVThree from "pages/HomepageVThree";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import ProductList from "pages/ProductList";
import ProductDetails from "pages/ProductDetails";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Completed from "pages/Completed";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <HomepageVOne />,
    },
    {
      path: "homepagevtwo",
      element: <HomepageVTwo />,
    },
    {
      path: "homepagevthree",
      element: <HomepageVThree />,
    },
    {
      path: "categorieswithsidebar",
      element: <CategorieswithSidebar />,
    },
    {
      path: "productlist",
      element: <ProductList />,
    },
    {
      path: "productdetails",
      element: <ProductDetails />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "completed",
      element: <Completed />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
