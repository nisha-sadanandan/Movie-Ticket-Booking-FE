import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
      <Footer/>
    </>
  );
};

export default HomeLayout;
