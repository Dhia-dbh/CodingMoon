import Nav from "react-bootstrap/Nav";
import "./Home.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Chart from "chart.js/auto";

import MyLineChart from "../LineChart/LineChart";
import { LineChart } from "recharts";
import LoanAdvisor from "../Loan Advisor/Loan Advisor";
import AET from "../AET/AET";

function Home() {
  const [Page, SetPage] = useState("Home");
  const [comp, Setcomp] = useState(
    <div className="centered-div">
      <h1>Welcome to the Administrator dashboard</h1>
    </div>
  );

  const handlePageClick = (Page) => {
    SetPage(Page);
    if (Page === "Expense Analysis") {
      Setcomp(<MyLineChart></MyLineChart>);
    } else if (Page === "Loan advisory") {
      Setcomp(<LoanAdvisor></LoanAdvisor>);
    } else if (Page === "AET") {
      Setcomp(<AET></AET>);
    } else {
      Setcomp(
        <div className="centered-div">
          <h1>Welcome to the Administrator dashboard</h1>
        </div>
      );
    }

    console.log(comp);
  };

  return (
    <div>
      <div class="area"></div>
      <nav class="main-menu">
        <ul>
          <li onClick={() => handlePageClick("Home")} class="has-subnav">
            <a href="https://jbfarrow.com">
              <i class="fa fa-home fa-2x"></i>
              <span class="nav-text">Home</span>
            </a>
          </li>
          <li
            onClick={() => handlePageClick("Expense Analysis")}
            class="has-subnav"
          >
            <a href="#">
              <i class="fa fa-globe"></i>
              <span class="nav-text">Expense Analysis</span>
            </a>
          </li>
          <li
            onClick={() => handlePageClick("Loan advisory")}
            class="has-subnav"
          >
            <a href="#">
              <i class="fa fa-comments fa-2x"></i>
              <span class="nav-text">Loan advisory</span>
            </a>
          </li>
          <li onClick={() => handlePageClick("AET")} class="has-subnav">
            <a href="#">
              <i class="fa fa-camera-retro fa-2x"></i>
              <span class="nav-text">Analyzing Expense Trends (AET)</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="fa fa-cogs fa-2x"></i>
              <span class="nav-text">Settings</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="fa fa-info fa-2x"></i>
              <span class="nav-text">Documentation</span>
            </a>
          </li>
        </ul>

        <ul class="logout">
          <li>
            <a href="#">
              <i class="fa fa-power-off fa-2x"></i>
              <span class="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="container">{comp}</div>
    </div>
  );
}
export default Home;
