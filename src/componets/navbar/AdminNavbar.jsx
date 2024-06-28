import { Link } from "react-router-dom";


const AdminNavbar = () => {

  const navLinks = [
    {
      
      value: "Addshow",
      path:"/admin/addshow"
    

    },

    {
      
      value: "Overview",
      path:"/admin/overview"
    

    }, 

    {
      value: "Signout",
      path:"/"
    },
  ];

  return (
    <div className="flex items-center justify-between p-4 shadow-lg bg-gray">
        <h1 className="text-red-600 italic text-3xl ">SHOWTIME</h1>
      <ul className="flex items-center gap-x-5">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            <li className="text-lg  text-gray-800">
              {link.value}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AdminNavbar;

