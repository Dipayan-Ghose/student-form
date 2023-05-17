import React from "react";
import Header from "../Pages/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex sm:flex-col my-1 md:flex-col my-2 lg:flex-row my-[30px]">
        <div className="w-[230px] ">
          <Sidebar></Sidebar>
        </div>
        <div className="grow m-3">
         <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
