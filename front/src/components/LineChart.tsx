// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, defaults } from "chart.js/auto";

// defaults.plugins.title.display = true;
// defaults.plugins.title.align = "start";
// defaults.plugins.title.color = "black";

// const LineChart = ({ slopes, distanceCumul }) => {
//   if (!distanceCumul) {
//     return null;
//   }

//   const chartData = {
//     labels: distanceCumul.map((data) => data.distance),
//     datasets: [
//       {
//         label: "Elevation",
//         data: distanceCumul.map((data) => data.elevation),
//         backgroundColor: "rgba(75,192,192,0.4)",
//         borderColor: "rgba(75,192,192,1)",
//       },
//     ],
//   };

//   return (
//     <Line
//       data={chartData}
//       options={{
//         elements: {
//           line: {
//             tension: 0.5,
//           },
//         },
//         plugins: { title: { text: "ELEVATION" } },
//       }}
//     />
//   );
// };

// export default LineChart;
