import { Outlet } from "react-router-dom";
import UserNavbar from "../navbar/UserNavbar.jsx";
import Movie from "../../componets/user/Movie.jsx"

const UserLayout = () => {
  return (
    <>
      <nav>
        <UserNavbar/>
      </nav>
      <Outlet />
      
    </>
  );
};

export default UserLayout;
