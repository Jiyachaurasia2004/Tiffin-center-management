import React from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Main from "./Main";

function DashBoard() {
  return (
    <div className="flex pt-[70px] min-h-screen bg-gray-50">
      <Sidebar />
       
      <main className="flex-1 p-8">
       
        <Outlet />
      </main>
    </div>
  );
}

export default DashBoard;
