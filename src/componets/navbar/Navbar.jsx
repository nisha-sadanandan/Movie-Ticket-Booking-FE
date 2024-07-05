import { Link } from "react-router-dom";



const Navbar = () => {


  const navLinks = [
    {
      path: "/user/signup",
      value: "User",
    },

    {
        path: "/admin/signup",
        value: "Admin",
      },

      {
        path: "/owner/signup",
        value: "TheaterOwner",
      },
  ];

  return (
    <div className="flex justify-between p-4 text-xl shadow-lg bg-zinc-950">
      <h1 className="text-red-600 italic text-3xl">SHOWTIME</h1> 
      <ul className="flex items-center gap-x-5 text-slate-50">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            <li>{link.value}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
