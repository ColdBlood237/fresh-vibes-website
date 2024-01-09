import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Upload from "./pages/Upload";
import Vote from "./pages/Vote";
import Error from "./pages/Error.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";

export default function App() {
  const [showNavBar, setShowNavBar] = useState(true); // Default value is true, which means NavBar will be shown

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      action: () => setShowNavBar(false), // When the path is "*", set showNavBar to false
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
