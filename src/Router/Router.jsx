import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Component/Home/Home";
import Register from "../Component/Register/Register";
import Login from "../Component/Login/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index: true,
        Component:Home,
      },
      {
        path:'/home',
        Component:Home,
      },
       {
        path:'/register',
        Component: Register,
      },
       {
        path:'/login',
        Component: Login,
      },
    ]
  },
]);