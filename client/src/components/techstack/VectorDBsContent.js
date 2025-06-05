import React from 'react';

function VectorDBsContent() {
  return (
    <div>
      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">Pinecone</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features (2025):</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Enterprise-Grade Similarity Search:</strong> Managed HNSW/IVF Indexing for &lt;50ms queries over 100M+ vectors. Auto-scalable clusters.</li>
        <li><strong>RAG-Specific Enhancements:</strong> Metadata filtering (e.g., "year:2025", "domain:legal") to boost relevance. <span className="citation">(medium.com, scoutos.com)</span></li>
        <li><strong>Unified API (Python + Java + Go):</strong> Seamless integration with LangChain/Hugging Face.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices (Pinecone):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Chunked Embeddings &amp; Prioritization 📑:</strong> Split large docs into ~512-token chunks, embed each. For QA, retrieve top 5 chunks and combine in prompt: "Use only these snippets..."</li>
        <li><strong>Hybrid Search (Keyword + Vector) 🔍:</strong> Use metadata filters first, then apply vector similarity for ~15% improved precision on domain datasets.</li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">Chroma</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features (2025):</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Lightweight, Developer-Friendly:</strong> Simple Python SDK (`ChromaClient()`) for local/managed service. Ideal for rapid prototyping. Open-source &amp; self-hostable. Single node handles ~5M vectors (&lt;100ms query). <span className="citation">(medium.com, medium.com)</span></li>
        <li><strong>RAG-Ready Integrations:</strong> First-class support for LangChain, LlamaIndex. Ingest docs with `Chroma.from_documents(...)`.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices (Chroma):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Local vs. Cloud Deployment 💻☁️:</strong> Run locally for quick tests. For &gt;10M vectors, switch to hosted service for auto-sharding/redundancy.</li>
        <li><strong>Embedding Normalization 📏:</strong> Normalize embeddings (`embedding / ||embedding||`) before insert (L2 recommended) for ~7% faster similarity calculations.</li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">Weaviate</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features (2025):</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>AI-Native Schema &amp; GraphQL:</strong> Define class schemas and query via GraphQL with vector search built in. <span className="citation">(weaviate.io)</span></li>
        <li><strong>Hybrid Search &amp; Modular Vectorizers:</strong> Combine keyword and vector search, with built-in modules for OpenAI, Cohere, and more. <span className="citation">(datacamp.com)</span></li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices (Weaviate):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>GraphQL Filters for RAG:</strong> Use `nearText` with filters to narrow search scope before vector similarity.</li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">Milvus</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features (2025):</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Open-Source &amp; Distributed:</strong> Supports HNSW and IVF indexes, GPU acceleration via NVIDIA RAFT. <span className="citation">(en.wikipedia.org)</span></li>
        <li><strong>Streaming Data Ingestion:</strong> Real-time updates with separation of compute and storage.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices (Milvus):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Partition-Oriented Shards:</strong> Shard collections by field or range for faster queries.</li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">Qdrant</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features (2025):</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Rust-Powered Performance:</strong> Custom HNSW implementation with &lt;20ms p95 latency. <span className="citation">(qdrant.tech)</span></li>
        <li><strong>Hybrid Filters &amp; Payload Queries:</strong> Combine metadata filters with vector similarity.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices (Qdrant):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Compression &amp; Quantization:</strong> Use built-in compression to reduce memory footprint for large collections.</li>
      </ul>
    </div>
  );
}


export default VectorDBsContent;
