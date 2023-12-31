import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { format } from "date-fns";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";
const LineChart = ({ points }) => {
  if (!points) {
    return null;
  }

  const chartData = {
    labels: points.map((point) => point.time),
    datasets: [
      {
        label: "Elevation",
        data: points.map((point) => point.ele),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-w-[70vw] h-[20rem] p-1">
      <Line
        data={chartData}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
          plugins: { title: { text: "ELEVATION" } },
        }}
      />
    </div>
  );
};

export default LineChart;
