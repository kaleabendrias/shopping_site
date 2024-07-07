import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Checkout from "./pages/Checkout";
import Checkoutmain from "./pages/Checkoutmain";

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
    ],
  },
]);

export default router;
