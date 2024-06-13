import { Outlet } from "react-router-dom";
import UserNavbar from "../navbar/UserNavbar.jsx";

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
