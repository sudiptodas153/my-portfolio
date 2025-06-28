import { createBrowserRouter } from "react-router";
import Layout from "../Componants/Layout/Layout";
import Home from "../Componants/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
      {
        index: true,
        Component:Home
      }
    ]
  },
]);