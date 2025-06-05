import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import Modal from './Modal';
import CloudPlatformsContent from './techstack/CloudPlatformsContent';
import LLMsContent from './techstack/LLMsContent';
import DeploymentContent from './techstack/DeploymentContent';
import FrameworksContent from './techstack/FrameworksContent';
import VectorDBsContent from './techstack/VectorDBsContent';
import OrchestrationContent from './techstack/OrchestrationContent';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const categories = [
  {
    label: 'Cloud Platforms (AWS, GCP, Azure)',
    color: '#118AB2',
    content: <CloudPlatformsContent />
  },
  {
    label: 'LLMs (OpenAI, Claude, Mistral)',
    color: '#06D6A0',
    content: <LLMsContent />
  },
  {
    label: 'Deployment (Docker, Kubernetes, CI/CD)',
    color: '#FFD166',
    content: <DeploymentContent />
  },
  {
    label: 'Frameworks (PyTorch, TensorFlow)',
    color: '#FF6B6B',
    content: <FrameworksContent />
  },
  {
    label: 'Vector DBs (Pinecone, Chroma, Weaviate, Milvus, Qdrant)',
    color: '#073B4C',
    content: <VectorDBsContent />
  },
  {
    label: 'Orchestration (LangChain, LangGraph, CrewAI)',
    color: '#EF476F',
    content: <OrchestrationContent />
  }
];

function TechStack() {
  const [selected, setSelected] = useState(null);

  const data = {
    labels: categories.map(c => c.label),
    datasets: [
      {
        data: [95, 92, 85, 80, 75, 70],
        backgroundColor: categories.map(c => c.color),
        borderRadius: 4,
        barThickness: 20,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    onClick: (e, elements) => {
      if (elements.length > 0) {
        const idx = elements[0].index;
        setSelected(categories[idx]);
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          footer: () => 'Click bar for details'
        }
      }
    },
    scales: {
      x: { beginAtZero: true },
      y: { ticks: { font: { size: 12 } } }
    }
  };

  return (
    <section id="tech-stack-interactive" className="my-16">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-[#073B4C]">The Essential Tech Stack for Full-Stack GenAI</h2>
        <p className="text-center max-w-3xl mx-auto text-[#118AB2] mb-8">
          Fluency in foundational frameworks, powerful LLMs, and robust cloud platforms is non-negotiable in 2025. Click on a bar below to explore details.
        </p>
        <div className="chart-container h-96 md:h-[500px]">
          <Bar data={data} options={options} />
        </div>
      </div>
      {selected && (
        <Modal title={selected.label} headerColor={selected.color} onClose={() => setSelected(null)}>
          {selected.content}
        </Modal>
      )}
    </section>
  );
}

export default TechStack;
