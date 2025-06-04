import React, { useState } from 'react';
import Modal from './Modal';

function RAGPipelines() {
  const [modal, setModal] = useState(null);

  const items = [
    {
      label: 'Document Ingestion',
      pos: { top: '5%', left: '45%' },
      color: '#FF6B6B',
      content: (
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Convert PDFs, databases, or feeds to embeddings.</li>
          <li>Store vectors in a nearest-neighbor index.</li>
        </ul>
      )
    },
    {
      label: 'Vector Index',
      pos: { top: '40%', left: '75%' },
      color: '#06D6A0',
      content: (
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Managed stores like Pinecone or Matching Engine.</li>
          <li>Supports hybrid search and metadata filters.</li>
        </ul>
      )
    },
    {
      label: 'Retrieval Prompt',
      pos: { top: '80%', left: '45%' },
      color: '#FFD166',
      content: (
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Embed retrieved docs into the prompt.</li>
          <li>Ask the LLM to answer using only that context.</li>
        </ul>
      )
    },
    {
      label: 'LLM Generation',
      pos: { top: '40%', left: '15%' },
      color: '#118AB2',
      content: (
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Models like GPT-4 or Claude produce the final answer.</li>
          <li>Grounded output reduces hallucinations by ~70%.</li>
        </ul>
      )
    },
    {
      label: 'Low-Code Apps',
      pos: { top: '10%', left: '10%' },
      color: '#073B4C',
      content: (
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Tools like SageMaker Canvas or Power Apps.</li>
          <li>Build RAG chatbots without heavy coding.</li>
        </ul>
      )
    },
    {
      label: 'Orchestration',
      pos: { top: '10%', left: '75%' },
      color: '#EF476F',
      content: (
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Frameworks such as LangChain or CrewAI.</li>
          <li>Manage document workflows and agents.</li>
        </ul>
      )
    },
    {
      label: 'Monitoring',
      pos: { top: '85%', left: '10%' },
      color: '#8d99ae',
      content: (
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Prometheus and Grafana track latency.</li>
          <li>Jaeger or X-Ray trace the full pipeline.</li>
        </ul>
      )
    },
    {
      label: 'Security',
      pos: { top: '85%', left: '75%' },
      color: '#22223b',
      content: (
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>IAM roles and network policies enforce least privilege.</li>
          <li>Secrets stored in Vault or cloud key managers.</li>
        </ul>
      )
    }
  ];

  return (
    <section id="rag-pipelines" className="my-16">
      <h2 className="text-3xl font-bold text-center mb-2">Retrieval-First Prompts &amp; Document Q&amp;A Pipelines</h2>
      <p className="text-center max-w-3xl mx-auto text-[#118AB2] mb-8">
        Retrieval-Augmented Generation combines vector search with LLMs to keep responses accurate and up to date.
      </p>
      <ol className="list-decimal list-inside space-y-2 text-left max-w-xl mx-auto text-[#073B4C] mb-10">
        <li><strong>Ingest &amp; Embed Documents:</strong> convert your corpus to embeddings and store them in a vector index.</li>
        <li><strong>Retrieve:</strong> query the index to fetch top-k relevant documents.</li>
        <li><strong>Construct Retrieval-First Prompt:</strong> prepend the retrieved context to the user question.</li>
        <li><strong>Generate:</strong> send the composite prompt to the LLM for a grounded answer.</li>
      </ol>
      <div className="relative rag-infographic mx-auto">
        <div className="rag-ring outer-ring"></div>
        <div className="rag-ring middle-ring"></div>
        <div className="rag-ring inner-ring"></div>
        {items.map((it, idx) => (
          <button
            key={idx}
            className="rag-icon"
            style={{ top: it.pos.top, left: it.pos.left, backgroundColor: it.color }}
            onClick={() => setModal(it)}
            aria-label={it.label}
          >
            {it.label.split(' ')[0]}
          </button>
        ))}
      </div>
      {modal && (
        <Modal title={modal.label} headerColor={modal.color} onClose={() => setModal(null)}>
          {modal.content}
        </Modal>
      )}
    </section>
  );
}

export default RAGPipelines;
