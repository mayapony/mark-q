import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Detail } from "../pages/detail";
import { Home } from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
]);
