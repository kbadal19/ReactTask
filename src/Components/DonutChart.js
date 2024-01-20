// // import React from "react";
// // import { Doughnut } from "react-chartjs-2";

// // const DonutChart = () => {
// //   const donutChartData = {
// //     labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
// //     datasets: [
// //       {
// //         data: [55, 31, 14],
// //         backgroundColor: [
// //           "rgba(255, 99, 132, 0.5)",
// //           "rgba(54, 162, 235, 0.5)",
// //           "rgba(255, 255, 0, 0.5)",
// //         ],
// //         borderColor: [
// //           "rgba(255, 99, 132, 1)",
// //           "rgba(54, 162, 235, 1)",
// //           "rgba(255, 255, 0, 1)",
// //         ],
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   const donutChartOptions = {
// //     cutout: "80%",
// //     responsive: true,
// //     plugins: {
// //       legend: {
// //         position: "right",
// //         labels: {
// //           usePointStyle: true,
// //           pointRadius: 5,
// //         },
// //       },
// //     },
// //   };

// //   return (
// //     <Doughnut
// //     chartData={donutChartData}
// //     />
// //   );
// // };

// // export default DonutChart;


// import React from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';

// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const DonutChart = () => {
//   const options = {
//     animationEnabled: true,
//     title: {
//       text: "Customer Satisfaction"
//     },
//     subtitles: [{
//       text: "71% Positive",
//       verticalAlign: "center",
//       fontSize: 24,
//       dockInsidePlotArea: true
//     }],
//     data: [{
//       type: "doughnut",
//       showInLegend: true,
//       indexLabel: "{name}: {y}",
//       yValueFormatString: "#,###'%'",
//       dataPoints: [
//         { name: "Unsatisfied", y: 5 },
//         { name: "Very Unsatisfied", y: 31 },
//         { name: "Very Satisfied", y: 40 },
//         { name: "Satisfied", y: 17 },
//         { name: "Neutral", y: 7 }
//       ]
//     }]
//   };

//   return (
//     <div>
//       <CanvasJSChart options={options} />
//     </div>
//   );
// };

// export default DonutChart;

