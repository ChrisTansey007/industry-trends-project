import React, { useEffect, useRef } from 'react';
import colors from '../constants/colors';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend);

function Competencies() {
  const data = {
    labels: ['Category A', 'Category B', 'Category C'],
    datasets: [
      {
        data: [35, 45, 20],
        backgroundColor: [colors.blue, colors.green, colors.yellow],
      },
    ],
  };

  const options = { responsive: true, maintainAspectRatio: false };

  return (
    <section id="competencies" className="my-16">
      <div className="card rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold text-center mb-2">Core Competency Breakdown</h2>
        <div className="mb-4 text-sm" style={{color: colors.blue}}>
          <h3 className="font-semibold mb-1">What you'll learn</h3>
          <ul className="list-disc list-inside">
            <li>Key skill categories</li>
            <li>Importance of process and business knowledge</li>
          </ul>
        </div>
        <p className="text-center max-w-2xl mx-auto mb-8" style={{color: colors.blue}}>
          Successful candidates are not just coders; they are multifaceted problem-solvers. The ideal profile is a blend of deep technical knowledge, process maturity, and strong business acumen.
        </p>
        <div className="chart-container h-80 md:h-96">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </section>
  );
}

export default Competencies;
