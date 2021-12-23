import React from "react";

const NavBar = () => {
  return (
    <nav className="w-5/6 m-auto  h-14 flex justify-between items-center">
      <div className=" w-auto rounded-md text-purple-500">
        <p>badu</p>
      </div>

      <ul className="flex justify-between w-48">
        <li>Home</li>
        <li>Product</li>
        <li>Offer</li>
      </ul>
      <ul className="flex justify-between w-20">
        <li>cart</li>
        <li>meu</li>
      </ul>
    </nav>
  );
};

export default NavBar;
