import { useEffect, useState } from "react";
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const [data, setData] = useState({
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Minimum Temp",
        data: [],
        borderColor: "rgba(255,255,255, 0.2)",
        backgroundColor: "rgba(152, 216, 158, 1)",
        borderWidth: 1,
        borderRadius: 2,
        barThickness: 15,
        barPercentage: 25,
      },
      {
        label: "Maximum Temp",
        data: [],
        borderColor: "rgba(255,255,255, 0.2)",
        backgroundColor: "rgba(238, 132, 132, 1)",
        borderWidth: 1,
        borderRadius: 2,
        barThickness: 15,
        barPercentage: 25,
      },
    ],
  });

  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        anchor: "end",
        labels: {
          usePointStyle: true,
          pointRadius: 1,
        },
      },
      title: {
        display: false,
        text: "",
      },
    },
    datasets: [
      {
        label: "Minimum",
        data: [],
        borderColor: "rgba(255,255,255, 0.2)",
        backgroundColor: "rgba(152, 216, 158, 1)",
        barThickness: 10,
        barPercentage: 5,
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Maximum",
        data: [],
        borderColor: "rgba(255,255,255, 0.2)",
        backgroundColor: "rgba(238, 132, 132, 1)",
        barThickness: 10,
        barPercentage: 5,
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  useEffect(() => {
    // Simulate data for 4 weeks
    const simulateDataForWeeks = () => {
      const minTemps = [20, 22, 18, 25]; // Simulated minimum temperatures for each week
      const maxTemps = [30, 32, 28, 35]; // Simulated maximum temperatures for each week

      setData({
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Minimum Temp",
            data: minTemps,
            borderColor: "rgba(255,255,255, 0.2)",
            backgroundColor: "rgba(152, 216, 158, 1)",
          },
          {
            label: "Maximum Temp",
            data: maxTemps,
            borderColor: "rgba(255,255,255, 0.2)",
            backgroundColor: "rgba(238, 132, 132, 1)",
          },
        ],
      });
    };

    simulateDataForWeeks();
  }, []);

  return (
    <div className="bargraph" style={{ width: "100%", maxWidth: "none" }}>
      <Bar data={data} options={options} key="bar-chart"></Bar>
    </div>
  );
};

export default BarChart;
