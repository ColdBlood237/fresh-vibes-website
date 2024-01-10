import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
