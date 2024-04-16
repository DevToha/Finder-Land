import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Components/Login and register page/Login/Login";
import Register from "../Components/Login and register page/Register/Register";
import EstateDetails from "../Components/Estate Details/EstateDetails";


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
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch('../estate.json')
      }
    ]
  },
]);


export default router