import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Checkout from "./pages/Checkout";
import Checkoutmain from "./pages/Checkoutmain";
import Shop from "./pages/Shop";
import PaymentSuccess from "./pages/Paymentsuccess";
import Custom404 from "./pages/Custom404";
import SingleProduct from "./pages/SingleProduct";
import Electronics from "./pages/Electronics";
import Sports from "./pages/Sports";
import Cloths from "./pages/Cloths";
import Toys from "./pages/Toys";
import Home from "./pages/Home";
import SuppliersPage from "./pages/Suppliers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        // children: [
        //   {
        //     path: "main",
        //     element: <Checkoutmain />,
        //   },
        // ],
      },
      {
        path: "main",
        element: <Checkoutmain />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "/paymentsuccess",
        element: <PaymentSuccess />,
      },
      {
        path: "/suppliers",
        element: <SuppliersPage />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/products/electronics",
        element: <Electronics />,
      },
      {
        path: "/products/sports",
        element: <Sports />,
      },
      {
        path: "/products/cloths",
        element: <Cloths />,
      },
      {
        path: "/products/toys",
        element: <Toys />,
      },
      {
        path: "/products/home",
        element: <Home />,
      },
      {
        path: "*",
        element: <Custom404 />,
      },
    ],
  },
]);

export default router;
