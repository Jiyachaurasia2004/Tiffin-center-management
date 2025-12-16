import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Price from "./pages/Price";
import About from "./pages/About";
import Signup from "./pages/Signup";


const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      
  {
    path:"/",
    element: <Home/>,
  },

  {
    path:"about",
    element: <About />,
  },
    
  {
    path:"services",
    element: <Services />,
  },

    {
    path:"menu",
    element: <Menu />,
  },
      {
    path:"price",
    element: <Price />,
  },

    {
    path:"contact",
    element: <Contact />,
  },
 {
    path:"signup",
    element: <Signup />,
  },
    
   ],
  },
]);

const App = () =>{
  return <RouterProvider router = {router}> </RouterProvider>;
};

export default App;