import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Checkout from "./pages/Checkout";
import Checkoutmain from "./pages/Checkoutmain";
import Shop from "./pages/Shop";
import PaymentSuccess from "./pages/Paymentsuccess";
import Custom404 from "./pages/Custom404";

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
        path: "*",
        element: <Custom404 />,
      },
    ],
  },
]);

export default router;
