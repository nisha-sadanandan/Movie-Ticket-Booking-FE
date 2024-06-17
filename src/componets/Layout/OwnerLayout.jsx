import { Outlet } from "react-router-dom";
import OwnerNavbar from "../navbar/OwnerNavbar.jsx";


const OwnerLayout = () => {
  return (
    <>
      <nav>
        <OwnerNavbar/>
      </nav>
      <Outlet />
    </>
  );
};

export default OwnerLayout;
