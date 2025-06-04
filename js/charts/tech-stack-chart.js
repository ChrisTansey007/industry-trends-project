// Tech stack bar chart initialization using Chart.js
const ctx = document.getElementById("techStackBarChartCanvas").getContext("2d");
const techStackChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Provider A", "Provider B", "Prompt Engineering"], // Placeholder data; will be replaced with actual data from industry-trends.html later
    datasets: [
      {
        data: [80, 70, 60], // Placeholder data
        backgroundColor: ["#118AB2", "#06D6A0", "#FFD166"], // Colors from the plan
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y", // For horizontal bar chart
    plugins: {
      title: {
        display: true,
        text: "Essential Tech Stack",
      },
    },
  },
});
