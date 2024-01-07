import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Upload from "./pages/Upload";
import Vote from "./pages/Vote";
import NoPage from "./pages/NoPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "upload",
    element: <Upload />,
  },
  {
    path: "vote",
    element: <Vote />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
