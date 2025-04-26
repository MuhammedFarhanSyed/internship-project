import React from "react";
import { Link } from "react-router";



function Navbar() {
 
  

  return (
    <>
      <div className="  p-5  ">
        <div className="">
          <div className="flex justify-between p-2 items-center  text-white rounded-2xl ">
            <Link to="/">
              <div className="font-bold hover:text-blue-500 duration-300 hover:underline">Home</div>
            </Link>
           
             
         
            <Link to="/wishlist">
              <div className="font-bold hover:text-blue-500 duration-300 hover:underline">Wishlist</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
