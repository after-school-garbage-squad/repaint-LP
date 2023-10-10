import type { RouteObject } from "react-router-dom";

import App from "./pages/app";
import { Manual } from "./pages/manual";
import { Privacy } from "./pages/privacy";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/manual",
    element: <Manual />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
];
