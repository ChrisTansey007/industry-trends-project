import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import Modal from './Modal';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const categories = [
  {
    label: 'Cloud Platforms (AWS, GCP, Azure)',
    color: '#118AB2',
    content: (
      <div>
        <h4 className="provider-title-aws">Amazon Bedrock & SageMaker</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
          <li>Unified access to leading foundation models.</li>
          <li>No-code tools like SageMaker Canvas for rapid prototyping.</li>
        </ul>
        <h4 className="provider-title-azure mt-4">Microsoft Azure</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
          <li>Azure OpenAI Service with GPT-4 series models.</li>
          <li>Low-code Power Apps and Azure AI Studio.</li>
        </ul>
      </div>
    )
  },
  {
    label: 'LLMs (OpenAI, Claude, Mistral)',
    color: '#06D6A0',
    content: (
      <div>
        <h4 className="provider-title-openai">OpenAI GPT-4.1</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
          <li>1M token context window and multimodal inputs.</li>
        </ul>
        <h4 className="provider-title-anthropic mt-4">Anthropic Claude 3</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
          <li>Reasoning and fast variants with long context.</li>
        </ul>
      </div>
    )
  },
  {
    label: 'Deployment (Docker, Kubernetes, CI/CD)',
    color: '#FFD166',
    content: (
      <div>
        <h4 className="docker-title">Docker & Containerization</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
          <li>Docker Compose for local multi-service apps.</li>
        </ul>
        <h4 className="kubernetes-title mt-4">Kubernetes & Orchestration</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
          <li>Managed services like EKS, AKS and GKE.</li>
        </ul>
      </div>
    )
  },
  {
    label: 'Frameworks (PyTorch, TensorFlow)',
    color: '#FF6B6B',
    content: (
      <div>
        <h4 className="framework-title-pytorch">PyTorch</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
          <li>Dynamic computation graphs and Lightning ecosystem.</li>
        </ul>
        <h4 className="framework-title-tensorflow mt-4">TensorFlow</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
          <li>Keras API with TF Serving for production.</li>
        </ul>
      </div>
    )
  },
  {
    label: 'Vector DBs (Pinecone, Chroma, Weaviate, Milvus, Qdrant)',
    color: '#073B4C',
    content: (
      <div>
        <h4 className="vectordb-title-pinecone">Pinecone</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
          <li>Serverless vector search with metadata filtering.</li>
        </ul>
        <h4 className="vectordb-title-weaviate mt-4">Weaviate</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
          <li>GraphQL schema and hybrid search.</li>
        </ul>
      </div>
    )
  },
  {
    label: 'Orchestration (LangChain, LangGraph, CrewAI)',
    color: '#EF476F',
    content: (
      <div>
        <h4 className="orchestration-title-langchain">LangChain</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
          <li>Modular chains and agent abstractions.</li>
        </ul>
        <h4 className="orchestration-title-crewai mt-4">CrewAI</h4>
        <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
          <li>Multi-agent workflows with dashboards.</li>
        </ul>
      </div>
    )
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
