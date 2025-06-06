import React, { useState } from 'react';
import Modal from './Modal';
import colors from '../constants/colors';

function RAGPipelines() {
  const [modalIdx, setModalIdx] = useState(null);

  const items = [
    {
      label: 'Document Ingestion',
      pos: { top: '5%', left: '45%' },
      color: colors.coral,
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
      color: colors.green,
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
      color: colors.yellow,
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
      color: colors.blue,
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
      color: colors.darkBlue,
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
      color: colors.magenta,
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
      color: colors.gray,
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
      color: colors.darkGray,
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
      <div className="mb-4 text-sm" style={{color: colors.blue}}>
        <h3 className="font-semibold mb-1">What you'll learn</h3>
        <ul className="list-disc list-inside">
          <li>Steps to build a RAG workflow</li>
          <li>Where vector stores fit</li>
          <li>How orchestration ties everything together</li>
        </ul>
      </div>
      <p className="text-center max-w-3xl mx-auto mb-8" style={{color: colors.blue}}>
        Retrieval-Augmented Generation combines vector search with LLMs to keep responses accurate and up to date.
      </p>
      <ol className="list-decimal list-inside space-y-2 text-left max-w-xl mx-auto mb-10" style={{color: colors.darkBlue}}>
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
            onClick={() => setModalIdx(idx)}
            aria-label={it.label}
          >
            {it.label.split(' ')[0]}
          </button>
        ))}
      </div>
      {modalIdx !== null && (
        <Modal
          title={items[modalIdx].label}
          headerColor={items[modalIdx].color}
          onClose={() => setModalIdx(null)}
          onPrev={modalIdx > 0 ? () => setModalIdx(modalIdx - 1) : null}
          onNext={modalIdx < items.length - 1 ? () => setModalIdx(modalIdx + 1) : null}
        >
          {items[modalIdx].content}
        </Modal>
      )}
    </section>
  );
}

export default RAGPipelines;
