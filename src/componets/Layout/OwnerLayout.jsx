import { Outlet } from "react-router-dom";
import OwnerNavbar from "../navbar/OwnerNavbar.jsx";
import Movie from "../../componets/user/Movie.jsx"

const OwnerLayout = () => {
  return (
    <>
      <nav>
        <OwnerNavbar/>
        < Movie/>
      </nav>
      <Outlet />
    </>
  );
};

export default OwnerLayout;
