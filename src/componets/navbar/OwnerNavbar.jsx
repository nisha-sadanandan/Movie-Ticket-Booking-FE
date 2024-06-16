import { Link } from "react-router-dom";

const OwnerNavbar = () => {
  const navLinks = [
    {
      path: "/owner/addshow",
      value: "AddShow",
    },

    {
      path: "/owner/addtheater",
      value: "AddTheater",
    },
    {
      path: "/",
      value: "Signout",
    },
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-lg bg-gray">
      <h1 className="text-red-600 italic text-2xl">SHOWTIME</h1>
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

export default OwnerNavbar;

