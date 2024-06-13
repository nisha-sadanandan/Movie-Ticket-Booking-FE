import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
