import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import ErrorPage from "../pages/notFound";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
