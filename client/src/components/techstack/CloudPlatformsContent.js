import React from 'react';

function CloudPlatformsContent() {
  return (
    <div>
      <h4 className="font-bold mt-4 mb-3 text-lg provider-title-aws">Amazon Web Services (AWS)</h4>
      <p className="text-sm text-gray-600 mb-1">Amazon Bedrock &amp; SageMaker</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Bedrock (Generative AI as a service):</strong> Provides optimized inference endpoints (e.g., Anthropic’s Claude 3.5, Meta’s Llama 3.1) labeled “Latency-Optimized,” which can reduce inference time by up to 30–50% compared to default instances. <span className="citation">(cloudthat.com)</span></li>
        <li><strong>SageMaker Endpoint Features:</strong>
          <ul className="list-circle list-inside pl-4 mt-1 space-y-1">
            <li>Multi-Model Endpoints: Host multiple models behind one endpoint; models load on demand when called.—avoids idle costs and simplifies horizontal scaling.</li>
            <li>Serverless Inference: Spins up inference capacity in milliseconds, then scales to zero when unused—ideal for unpredictable GenAI bursts.</li>
            <li>Endpoint Caching &amp; Inference Pipelines: Cache repeated embeddings or partial outputs to cut “cold start” times, and chain preprocessing steps (e.g., tokenization) in a single pipeline. <span className="citation">(cloudthat.com)</span></li>
          </ul>
        </li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices on AWS:</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Region-Aware Endpoints:</strong> Always deploy Bedrock/SageMaker endpoints in the region closest to your user base to minimize network latency (e.g., use us-east-1 vs. us-west-2). <span className="citation">(cloudthat.com)</span></li>
        <li><strong>Streaming Responses:</strong> Enable streaming (if supported) so that clients receive tokens as soon as they’re generated rather than waiting for the full output—improves perceived performance for chatbots.</li>
        <li><strong>Light-Weight Prompts &amp; “Skeleton of Thought”:</strong> Break complex instructions into smaller chained prompts (“outline first, expand later”) to keep each Bedrock/GPT call minimal. Use Bedrock’s fine-tuning only for domain-specific use cases; otherwise rely on parameterized prompts to reduce model-reloading overhead. <span className="citation">(cloudthat.com)</span></li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg provider-title-gcp">Google Cloud Platform (GCP)</h4>
      <p className="text-sm text-gray-600 mb-1">Vertex AI &amp; Vertex AI Edge Manager</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Vertex AI (GenAI Suite):</strong> Offers pre-built “Text-Embeddings-V2” and “PaLM 2” models that can be served with custom compute backends (TPUs/GPUs). Using quantization (post-training quantization or QAT), you can shrink model sizes by ~30%, cutting inference time by ~25%. (Supports both hosted and custom container deployments for fine-tuning or inference.) <span className="citation">(cloudthat.com, upmarket.co)</span></li>
        <li><strong>Vertex AI Edge Manager:</strong> Enables hybrid/edge deployments of smaller distilled GenAI models to run “on-prem” or near data sources—reducing round-trip latency by ~20% for high-frequency inference.</li>
        <li><strong>Managed Vector DB (Matching Engine):</strong> GCP’s Matching Engine offers low-latency nearest-neighbor search (&gt; 100 QPS) with HNSW, accelerating RAG pipelines. (Pairs well with PaLM 2 for contextual relevance.) <span className="citation">(upmarket.co)</span></li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices on GCP:</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Custom Machine Types for Pre-/Post-Processing:</strong> Reserve high-vCPU nodes for data prep (tokenization, embedding), then route only the final embeddings to PaLM 2 endpoints. This separates concerns, cuts inference bursts, and optimizes your VM footprint. <span className="citation">(upmarket.co)</span></li>
        <li><strong>Edge-Aware Inference:</strong> For user-facing chatbots needing &lt; 50 ms responses, deploy a distilled GenAI model on Vertex Edge, and fallback to full PaLM 2 on the cloud only when the edge model’s “uncertainty score” is high.</li>
        <li><strong>Batch Embedding Calls:</strong> Group multiple prompt contexts into a single embedding API call (up to 1,000 texts) to reduce per-token billing.</li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg provider-title-azure">Microsoft Azure</h4>
      <p className="text-sm text-gray-600 mb-1">Azure OpenAI Service &amp; Cognitive Search</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Azure OpenAI (GPT-4, GPT-4o, GPT-4.1, etc.):</strong> Provides managed, regionally distributed endpoints for GPT models.
          <ul className="list-circle list-inside pl-4 mt-1 space-y-1">
            <li>Provisioned Throughput vs. Pay-Per-Token: Choose a fixed “provisioned” billing tier if you have bursts—avoids double-charging in peak usage. <span className="citation">(walturn.com, futuremaster.net)</span></li>
            <li>Streaming Endpoints (SSE): Azure OpenAI supports SSE-based token streaming out of the box, improving UX for real-time applications. <span className="citation">(multitaskai.com)</span></li>
          </ul>
        </li>
        <li><strong>Azure Cognitive Search + RAG:</strong> Combine Azure Cognitive Search (semantic search, skillsets, vector store) with Azure OpenAI to build Retrieval-Augmented Generation pipelines. This “search + generate” pattern can cut hallucination rates by ~70%. <span className="citation">(thecodev.co.uk, futuremaster.net)</span></li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices on Azure:</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Prompt Token Compression:</strong> Write context prompts that ask for bullet answers or summaries (e.g., “In no more than 100 tokens, describe…”), forcing the model to return shorter, precise outputs—saving tokens. <span className="citation">(thecodev.co.uk, multitaskai.com)</span></li>
        <li><strong>Region-Specific Replication:</strong> If you serve a global audience, deploy multiple Azure OpenAI instances (e.g., eastus, westeurope) and route traffic via Azure Front Door—reduces RTT by ~50 ms per round trip.</li>
        <li><strong>RAG-First Prompt Design:</strong> Always prepend retrieved document chunks (via Cognitive Search) to your query with explicit “use only these sources” instructions to minimize ungrounded outputs.</li>
      </ul>
    </div>
  );
}

export default CloudPlatformsContent;
