import React from "react";
import { FaHome, FaHouseUser, FaStarAndCrescent, FaBookmark } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white drop-shadow-2xl border-t border-sky-600  container mx-auto z-40 p-2 fixed bottom-0 right-0 left-0 flex justify-between items-center md:hidden">
      <a href="#home" aria-label="Beranda" className="link">
        <FaHome />
      </a>
      <a href="#about" className="text-2xl  text-sky-700 hover:bg-sky-500 hover:text-white transition-all duration-200 ease-in-out px-2 py-2 rounded-lg">
        <FaHouseUser />
      </a>
      <a href="#activity" aria-labelledby="Activity" className="text-sky-700 text-2xl hover:bg-sky-500 hover:text-white px-2 py-2 rounded-lg transition-all duration-200 ease-in-out">
        <FaStarAndCrescent />
      </a>
      <a href="#testimony" aria-labelledby="Testimonoal" className="text-sky-700 text-2xl hover:bg-sky-500 hover:text-white px-2 py-2 rounded-lg transition-all duration-200 ease-in-out">
        <FaBookmark />
      </a>
    </nav>
  );
}
