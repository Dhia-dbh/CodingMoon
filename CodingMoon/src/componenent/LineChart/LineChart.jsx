import Nav from "react-bootstrap/Nav";
import "./LineChart.css";
import React from "react";
import { Button } from "react-bootstrap";
import Chart from "chart.js/auto";
import { Pie, Bar } from "react-chartjs-2";
import {
  LineChart as RechartsLineChart, // Renamed to avoid conflict
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function MyLineChart() {
  // Renamed to avoid conflict

  const LineChartComponent = () => {
    const data = [
      { name: "Jan", "Expenses": 4000, "Predicted Expences": 2400, amt: 2400 },
      { name: "Feb", "Expenses": 3000,"Predicted Expences": 1398, amt: 2210 },
      { name: "Mar", "Expenses": 2000, "Predicted Expences": 9800, amt: 2290 },
      { name: "Apr", "Expenses": 2780, "Predicted Expences": 3908, amt: 2000 },
      { name: "May", "Expenses": 1890, "Predicted Expences": 4800, amt: 2181 },
      { name: "Jun", "Expenses": 2390, "Predicted Expences": 3800, amt: 2500 },
      { name: "Jul", "Expenses": 3490, "Predicted Expences": 4300, amt: 2100 },
    ];

    return (
      <RechartsLineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Predicted Expences" stroke="#8884d8" />
        <Line type="monotone" dataKey="Expenses" stroke="#82ca9d" />
      </RechartsLineChart>
    );
  };

  const datap = {
    labels: [
      "HR departement",
      "Dev departement",
      "IT departement",
      "Production departement",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const datab = {
    labels: [
      "HR departement",
      "Dev departement",
      "IT departement",
      "Production departement",
    ],
    datasets: [
      {
        label: "Expences",
        data: [65, 59, 80, 81],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: 'bottom', // Position the legend at the bottom
      },
    },
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
      <div >
      <legend>Expences Vs Expected Expences</legend>
        {LineChartComponent()}</div>
        <div style={{ width: "40%", height: "40%" , marginTop:"2%",marginLeft:"8%"}}>
        <legend>Department expences</legend>
        <Bar data={datab} />
          
        </div>
       
      </div>
      <div style={{ width: "23%", height: "30%" , marginLeft:"35%" }}>
      <legend>Expences this Month</legend>
      <Pie data={datap} width={100} height={100} options={options} /></div>
    </div>
  );
}

export default MyLineChart;
