import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Components/Login and register page/Login/Login";
import Register from "../Components/Login and register page/Register/Register";
import EstateDetails from "../Components/Estate Details/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import Card from "../Components/Card/Card";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/logIn',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/estateDetails/:id",
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader: () => fetch('../estate.json')
      },
      {
        path: "/card",
        element: <PrivateRoute><Card></Card></PrivateRoute>
      }
    ]
  },
]);


export default router