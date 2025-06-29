import { createBrowserRouter } from "react-router";
import Layout from "../Componants/Layout/Layout";
import Home from "../Componants/Home/Home";
import Details from "../Componants/Details/Details";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        loader: () => fetch('/project.json'),
        Component: Home,
      },
      {
        path: 'details/:id',
        loader: async({ params }) => {
          const res = await fetch('/project.json');
          const data = await res.json();
          // console.log(data, params.id)
          return data.find(project => project.id == params.id);
        },
        Component: Details
      }
    ]
  },
]);