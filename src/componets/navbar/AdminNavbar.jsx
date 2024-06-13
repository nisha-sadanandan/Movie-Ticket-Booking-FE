import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const navLinks = [
    {
      path: "/admin/addshow",
      value: "Addshow",
    },
    {
      path: "/admin/signout",
      value: "Signout",
    },
  ];

  return (
    <div className="flex items-center justify-between p-4 shadow-lg bg-gray">
      <Link to="/admin/dashboard">
        <h1 className="text-red-600 italic text-2xl">SHOWTIME</h1>
      </Link>
      <ul className="flex items-center gap-x-5">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            <li className="text-lg font-semibold text-gray-800">
              {link.value}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AdminNavbar;

