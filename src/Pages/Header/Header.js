import React from "react";
import logo from './logo.jpg';
const Header = () => {
  return (
    <div>
      <div className="navbar py-4" style={{backgroundColor: "#FFFCFB"}}>
        <div className="flex-1">
        <img alt="" className="w-16 rounded-full" src={logo}/> 
        <span className="text-xl font-bold text-gray-500">CRUD</span>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-outline btn-error">
              <div className="w-32 rounded">
                <button className="">User Login</button>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
