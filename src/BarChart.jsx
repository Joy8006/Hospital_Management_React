import React from "react";
import { PolarArea, defaults } from "react-chartjs-2";
import "./BarChart.css";

defaults.plugins.legend.position = "bottom";
defaults.plugins.legend.align = "center";
defaults.plugins.tooltip.bodyAlign = "left";

const BarChart = () => {
  return (
    <>
      <PolarArea
        data={{
          labels: [
            "Hospital A",
            "Hospital B",
            "Hospital C",
            "Hospital D",
            "Hospital E",
            "Hospital F",
          ],
          datasets: [
            {
              label: "No of Patients",
              data: [1200, 1070, 950, 780, 850, 900],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          animations: {
            duration: 10000,
            easing: "easeOutBounce",
            delay: 500,
            loop: true,
          },
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Number of Patients",
            },
          },
        }}
      />
    </>
  );
};
export default BarChart;
