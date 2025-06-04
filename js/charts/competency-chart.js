// Competency chart initialization using Chart.js
const ctx = document.getElementById("competencyDonutChart").getContext("2d");
const competencyChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Category A", "Category B", "Category C"], // Placeholder data; will be replaced with actual data from industry-trends.html later
    datasets: [
      {
        data: [35, 45, 20], // Placeholder data
        backgroundColor: ["#118AB2", "#06D6A0", "#FFD166"], // Colors from the plan
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
