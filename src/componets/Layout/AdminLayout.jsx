import { Outlet } from "react-router-dom";
import AdminNavbar from "../navbar/AdminNavbar.jsx"



const AdminLayout = () => {
  return (
    <>
      <nav>
        <AdminNavbar/>
      </nav>
      <Outlet />
     
    </>
  );
};

export default AdminLayout;
