import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function TechStack() {
  const data = {
    labels: ['Provider A', 'Provider B', 'Prompt Engineering'],
    datasets: [
      {
        data: [80, 70, 60],
        backgroundColor: ['#118AB2', '#06D6A0', '#FFD166'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: 'Essential Tech Stack',
      },
    },
  };

  return (
    <section id="tech-stack-interactive" className="my-16">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold text-center mb-2">The Essential Tech Stack for Full-Stack GenAI</h2>
        <p className="text-center max-w-3xl mx-auto text-[#118AB2] mb-8">
          Fluency in foundational frameworks, powerful LLMs, and robust cloud platforms is non-negotiable in 2025.
        </p>
        <div className="chart-container h-96 md:h-[500px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </section>
  );
}

export default TechStack;
