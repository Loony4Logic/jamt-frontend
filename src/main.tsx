import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Logs from "./pages/Logs.tsx";
import { ROUTES_MAP } from "./AppConstants.ts";
import Settings from "./pages/Settings.tsx";

/**
 * Note -> Refactor this into another component/file if it becomes too big
 * Check latest react-router-dom documentation for best approach and practices
 *  */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES_MAP.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ROUTES_MAP.LOGS,
        element: <Logs />,
      },
      {
        path: ROUTES_MAP.SETTINGS,
        element: <Settings />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
