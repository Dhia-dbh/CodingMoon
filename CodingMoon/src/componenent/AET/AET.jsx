import Nav from "react-bootstrap/Nav";
import "./AET.css";
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

function AET() {
  const LineChartComponent = () => {
    const data = [
      { name: "Jan", Expenses: 4000, "Predicted Expences": 2400, amt: 2400 },
      { name: "Feb", Expenses: 3000, "Predicted Expences": 1398, amt: 2210 },
      { name: "Mar", Expenses: 2000, "Predicted Expences": 9800, amt: 2290 },
      { name: "Apr", Expenses: 2180, "Predicted Expences": 3908, amt: 2000 },
      { name: "May", Expenses: 2000, "Predicted Expences": 4800, amt: 2181 },
      { name: "Jun", Expenses: 2390, "Predicted Expences": 3800, amt: 2500 },
      { name: "Jul", Expenses: 1850, "Predicted Expences": 4300, amt: 2100 },
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

  const LineChartComponent1 = () => {
    const data = [
      { name: "Jan", Expenses: 1000, "Predicted Expences": 2400, amt: 2400 },
      { name: "Feb", Expenses: 2000, "Predicted Expences": 1398, amt: 2210 },
      { name: "Mar", Expenses: 1500, "Predicted Expences": 1800, amt: 2290 },
      { name: "Apr", Expenses: 2220, "Predicted Expences": 3908, amt: 2000 },
      { name: "May", Expenses: 1450, "Predicted Expences": 4800, amt: 2181 },
      { name: "Jun", Expenses: 1800, "Predicted Expences": 3800, amt: 2500 },
      { name: "Jul", Expenses: 2500, "Predicted Expences": 4300, amt: 2100 },
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

  const LineChartComponent3 = () => {
    const data = [
      { name: "Jan", "Expenses": 4000, "Predicted Expences": 2400, amt: 2400 },
      { name: "Feb", "Expenses": 3000, "Predicted Expences": 1398, amt: 2210 },
      { name: "Mar", "Expenses": 2000, "Predicted Expences": 9800, amt: 2290 },
      { name: "Apr", "Expenses": 2780, "Predicted Expences": 3908, amt: 2000 },
      { name: "May", "Expenses": 4890, "Predicted Expences": 4800, amt: 2181 },
      { name: "Jun", "Expenses": 12390, "Predicted Expences": 3800, amt: 2500 },
      { name: "Jul", "Expenses": 3490, "Predicted Expences": 4300, amt: 2100 },
    ];

    return (
      <RechartsLineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey= "Predicted Expences" stroke="#8884d8" />
        <Line type="monotone" dataKey="Expenses" stroke="#82ca9d" />
      </RechartsLineChart>
    );
  };

  const LineChartComponent4 = () => {
    const data = [
      { name: "Jan", Expenses: 4000, "Predicted Expences": 2400, amt: 2400 },
      { name: "Feb", Expenses: 30000, "Predicted Expences": 1398, amt: 2210 },
      { name: "Mar", Expenses: 2000, "Predicted Expences": 9800, amt: 2290 },
      { name: "Apr", Expenses: 2780, "Predicted Expences": 30908, amt: 2000 },
      { name: "May", Expenses: 1890, "Predicted Expences": 4800, amt: 2181 },
      { name: "Jun", Expenses: 20390, "Predicted Expences": 3800, amt: 2500 },
      { name: "Jul", Expenses: 3490, "Predicted Expences": 43600, amt: 2100 },
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
  return (
    <div>
      <div className="container1">
        <div>
          <legend>HR Department</legend>
          {LineChartComponent()}
        </div>
        <div>
          <legend>IT Department</legend>
          {LineChartComponent1()}
        </div>
      </div>
      <div className="container1">
        <div>
          <legend>Marketing Department</legend>
          {LineChartComponent3()}
        </div>
        <div>
          <legend>Production Department</legend>
          {LineChartComponent4()}
        </div>
      </div>
    </div>
  );
}
export default AET;
