import React from "react";

const Footer = () => {
  return (
    <div className="w-5/6 m-auto p-4 bg-green-700 rounded-lg text-white py-4">
      <div className="flex justify-between px-2 border-b-2 pb-3 border-gray-400">
        <div>
          <h2>logo</h2>
        </div>
        <ul className="flex">
          <li className="px-2">Home</li>
          <li className="px-2">Products</li>
          <li className="px-2">Offers</li>
          <li className="px-2">About Us</li>
          <li className="px-2">Contact</li>
        </ul>
        <ul className="flex">
          <li className="px-1">fab</li>
          <li className="px-1">insta</li>
          <li className="px-1">twitter</li>
        </ul>
      </div>
      <div className="flex justify-center py-5 border-b-2 border-gray-400">
        <p className="px-4">&copy; badu's.creative</p>
        <p className="px-4"> Privacy policy</p>
        <p className="px-4">Term of services</p>
      </div>
    </div>
  );
};

export default Footer;
