import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Error from "./components/Error";



const AppLocator = () => {
  return (
    <div className="main">
      <Header />
      <Outlet/>
    </div>
  );
};

const router =createBrowserRouter([
  {
  path:"/",
  element:<AppLocator/>,
  children:[
    {
     path:"/",
     element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<ContactUs/>
    }
  ],
  errorElement:<Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
