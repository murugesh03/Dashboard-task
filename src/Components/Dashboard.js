import React, { useState } from "react";
import MainArea from "./MainArea/MainArea";
import { AiOutlineHome } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import "./Dashboard.css";
const Dashboard = () => {
  const [sideOpen, toggleSide] = useState(true);

  const toggler = () => {
    toggleSide(!sideOpen);
  };

  return (
    <main>
      <aside
        id="sidebar"
        className=""
        style={{
          background: "linear-gradient(to bottom, #ff5f6d, #ffc371)",
          minHeight: "100vh",
          width: "70px",
          float: "left",
          top: 0,
          position: "fixed",
          left: sideOpen ? "0" : "-1000px",
          transition: "left 0.5s",
        }}
      >
        <ul>
          <li>
            <AiOutlineHome />
          </li>
          <li>
            <RiContactsLine />
          </li>
        </ul>
      </aside>
      <section
        id="dashboard"
        style={{
          height: "100vh",
          transition: "margin 0.5s",
        }}
      >
        <MainArea toggler={toggler} />
      </section>
    </main>
  );
};

export default Dashboard;
