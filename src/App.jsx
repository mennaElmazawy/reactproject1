import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Layout from "./Layout";
import Error from "./Error";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index:true, element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "Contact", element: <Contact /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]
  
);
  return (
    <>
      
      <RouterProvider router={router}></RouterProvider>
      
    </>
  );
}
