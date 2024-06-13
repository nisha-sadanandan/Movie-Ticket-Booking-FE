import { Outlet } from "react-router-dom";
import AdminNavbar from "../navbar/AdminNavbar.jsx";
import AdminOverview from "../admin/AdminOverview.jsx"

const AdminLayout = () => {
  return (
    <>
      <nav>
        <AdminNavbar/>
      </nav>
      <AdminOverview/>
      <Outlet />
    </>
  );
};

export default AdminLayout;
