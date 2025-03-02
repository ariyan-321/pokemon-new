import { createBrowserRouter } from "react-router-dom";
import MainHome from "../Pages/MainHome";
import Home from "../Pages/Home";
import Details from "../Components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainHome></MainHome>,
    children:[{
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/details/:id",
      element:<Details></Details>
    }
  
  ]
  },
]);

export default router;
