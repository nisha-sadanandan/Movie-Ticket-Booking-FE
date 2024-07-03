import { Link } from "react-router-dom";
import React from 'react';

const UserNavbar = () => {

  

  const navLinks = [
    {
      path: "/user/movies",
      value: "Movie",
    },
    {
      path: "/user/Theaters",
      value: "Theater",
    },

    {
      path: "/",
      value: "Signout",
    },
  ];
  return (
    <div className="dark flex items-center justify-between p-4 shadow-lg bg-gray">
      <h1 className="text-red-600 italic text-3xl">SHOWTIME</h1>
      <ul className="flex items-center gap-x-5">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            <li className="text-lg text-gray-800">{link.value}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UserNavbar;
