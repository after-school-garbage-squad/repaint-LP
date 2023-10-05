import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// eslint-disable-next-line import/order
import App from "./pages/app.tsx";

import "./index.css";
import { Manual } from "./pages/manual.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/manual",
    element: <Manual />,
  },
]);

createRoot(document.querySelector("#root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
