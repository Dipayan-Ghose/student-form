import React from "react";
import { Link } from "react-router-dom";
import { MdOutlinePeople, MdManageSearch, MdOutlineLogout } from "react-icons/md";
import './Sidebar.css';
const Sidebar = () => {
  const Menus = [
    <React.Fragment>
      <li className="flex items-center gap-2 text-2xl sideItem">
        <MdOutlinePeople></MdOutlinePeople>
        <Link to="/" className="trans text-lg">Add Student </Link>
      </li>
      <li className="flex items-center mt-2 gap-2 text-2xl sideItem">
      <MdManageSearch></MdManageSearch>
        <Link to="/manageStudent" className="trans text-lg">Manage Students</Link>
      </li>
      <li className="flex items-center my-2 gap-2 text-2xl sideItem"> 
        <MdOutlineLogout></MdOutlineLogout>
        <Link to="/logout" className="trans text-lg">Logout</Link>
      </li>
    </React.Fragment>,
  ];
  return (
    <div className="m-2 mt-[60px]">
     <ul className=" h-[180px] ">
      {Menus}
     </ul>
    </div>
  );
};

export default Sidebar;
