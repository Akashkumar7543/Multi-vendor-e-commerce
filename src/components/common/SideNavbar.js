import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaMobile } from "react-icons/fa";
import { IoTvSharp } from "react-icons/io5";
import { GiClothes, GiLoincloth } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

const SidebarNavbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <FaMobile size={25} className="mr-4" />, text: "Mobiles, Computers" },
    { icon: <IoTvSharp size={25} className="mr-4" />, text: "TV, Appliances, Electronics" },
    { icon: <GiClothes size={25} className="mr-4" />, text: "Men's Fashion" },
    { icon: <GiLoincloth size={25} className="mr-4" />, text: "Women's Fashion" },
  ];

  // const subMenuItems = [
  //   { text: "All Mobile Phones" },
  //   { text: "All Mobile Accesories" },
  //   { text: "Cases & Covers" },
  //   { text: "Screen Protectrs" },
  //   // { text: "Power Banks" },
  //   // { text: "Refurbished & Open Box" },
  //   // { text: "Tablets" },
  //   // { text: "Wearable Devices" },
  //   // { text: "Smart Home" },
  //   // { text: "Office Supplies & Stationery" },
  //   // { text: "Software" },
  // ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-2">
      {/* Left side */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav) }
          size={30}
          className="absolute right-4 top-6 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Main <span className="font-bold">Menu</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {menuItems.map(({ icon, text }, index) => {
              return (
                <div key={index} className="flex py-4 items-center justify-between">
                  <li className="text-md flex cursor-pointer rounded-full p-2 hover:text-white hover:bg-black">
                    {icon} {text}
                  </li>
                  <IoIosArrowForward/>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarNavbar;