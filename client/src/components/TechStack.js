import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import Modal from './Modal';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

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

function LLMsContent() {
  return (
    <div>
      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">OpenAI (GPT-4, GPT-4o, GPT-4.1, GPT-3.5-turbo)</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features:</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>GPT-4.1 (May 2025):</strong> 1 Million-Token Context Window (processing entire books). Multimodal capabilities (images + text). ~20% speedup vs. GPT-4.0 with similar quality. <span className="citation">(walturn.com)</span></li>
        <li><strong>GPT-3.5-turbo:</strong> Lower-cost, suitable for many web chatbots and summarization tasks.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices (OpenAI):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Few-Shot Anchoring with “Chain-of-Verification” (CoVe) 🎯:</strong> Provide 2–3 sample Q/A pairs, then instruct model to “check each fact” against provided truths to reduce hallucinations. <span className="citation">(helicone.ai)</span></li>
        <li><strong>“System + User” Role Separation 🗣️:</strong> Use concise system message (e.g., “You are a concise GenAI assistant that answers in ≤ 100 tokens”) for predictable costs and uniform outputs.</li>
        <li><strong>Long-Context Pruning ✂️:</strong> If exceeding 8k tokens, summarize earlier conversation segments into a “gist” before continuing to keep context within budget.</li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">Anthropic (Claude 3.x Family)</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features:</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Claude 3.7 (“Sonnet Extended Thinking”):</strong> Explicit Reasoning Mode (slower, step-by-step outputs for math/science). Faster “Non-Reasoning” Mode for lower latency. <span className="citation">(helicone.ai)</span></li>
        <li><strong>Claude 3.5 Haiku:</strong> Balanced performance for chatbots and document QA.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices (Claude):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>“Constitutional AI” Safety Knobs 🛡️:</strong> Use meta-prompts like “If any output might be hallucinated, respond: ‘I’m not sure.’” to leverage internal guardrails.</li>
        <li><strong>Multimodal Segmentation 🖼️+📄:</strong> When feeding images + text, wrap image descriptions in clear tags (e.g., “[Image: blueprint of …]”) for parser anchoring. <span className="citation">(atreyus.ai, apnews.com)</span></li>
        <li><strong>Dynamic Temperature Tuning 🔥:</strong> For reasoning tasks, set temperature = 0.2; for creative tasks, use 0.7-0.8 to avoid unnecessary randomness on facts.</li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">Mistral AI</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features:</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Mistral Large (Late 2024 release):</strong> Comparable to GPT-4 in reasoning, ~25% more cost-efficient for code-generation. Open-source DNA for on-premise fine-tuning. <span className="citation">(apnews.com)</span></li>
        <li><strong>LeChat (Mistral’s Chatbot):</strong> Fast response times (&lt; 150 ms) with ~90% factual accuracy on open-domain QA.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices (Mistral):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Fine-Tuning with Low-Rank Adaptation (LoRA) ⚙️:</strong> Use open architecture to LoRA-tune on domain-specific data (&lt; 1 GB input) for ~10% accuracy boost with ~2% overhead.</li>
        <li><strong>Chain-of-Thumbnails 📑:</strong> For summarization, prompt for bullet “thumbnail highlights” before a final paragraph to reduce token usage by ~15%.</li>
        <li><strong>Multi-Stage Prompting 🔢:</strong> Stage 1: “Outline in ≤ 50 words.” Stage 2: “Expand each bullet.” Prevents runaway outputs.</li>
      </ul>
    </div>
  );
}

function DeploymentContent() {
  return (
    <div>
      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">Docker (Containerization)</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features for GenAI:</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Reproducible Environment:</strong> Package inference server (FastAPI + PyTorch + GPU drivers) into one Docker image for identical behavior across dev/staging/prod. <span className="citation">(dev.to)</span></li>
        <li><strong>NVIDIA CUDA Support:</strong> Use NVIDIA’s base images (e.g., nvidia/cuda:12.1-runtime) for GPU-accelerated inference.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Related Best Practices (Docker):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Minimal Base Images 📦:</strong> Start from slim Python image (python:3.11-slim), add only necessary ML libs. Smaller images (~500MB vs&gt;2GB) launch faster. <span className="citation">(dev.to)</span></li>
        <li><strong>Volume-Mount for Embeddings Cache 💾:</strong> Mount `~/\.cache/huggingface` to avoid repeated downloads on container restarts, cutting cold start times.</li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">Kubernetes (Scaling &amp; Orchestration)</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features for GenAI:</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Kubernetes-Native CI/CD:</strong> Use GitOps tools (Argo CD, Flux CD) for declarative CD—`kubectl apply` Helm charts for new model versions. <span className="citation">(cloudoptimo.com, thenewstack.io)</span></li>
        <li><strong>Horizontal Pod Autoscaler (HPA):</strong> Auto-scale inference pods based on CPU/GPU usage or custom metrics (e.g., queue length).</li>
        <li><strong>Kaniko &amp; BuildKit:</strong> Build Docker images inside cluster (Kaniko) for increased security in multi-tenant workloads.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Related Best Practices (Kubernetes):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Divide Pre/Post-Processing (Sidecars) 🧩:</strong> Run tokenization/embedding as sidecar. If prompt &gt;2048 tokens, sidecar chunks text before main model call, reducing GPU pressure. <span className="citation">(cloudoptimo.com)</span></li>
        <li><strong>Asynchronous Batching Layer 📨:</strong> Use message queue (RabbitMQ, SQS) before inference. Batch multiple user prompts (e.g., up to 8) into single API call to boost throughput.</li>
        <li><strong>Use Node Affinity 📍:</strong> Pin inference pods to GPU-equipped nodes (NodeSelector) to avoid cold scheduling delays.</li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">CI/CD (Automated Pipelines)</h4>
      <p className="text-sm text-gray-600 mb-1">Key Tools (2025):</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>GitHub Actions:</strong> YAML-driven workflows for build, test, push Docker images to ECR/GCR/ACR. <span className="citation">(bitcot.com)</span></li>
        <li><strong>GitLab CI/CD:</strong> Tight integration with GitLab repos; parallel runners for tests, model eval, Docker build → K8s deployment. <span className="citation">(bitcot.com)</span></li>
        <li><strong>Argo CD &amp; Flux CD:</strong> GitOps style: Keep K8s manifests/Helm charts in Git; Argo CD continuously reconciles to cluster.</li>
        <li><strong>AWS CodePipeline / Azure DevOps / Google Cloud Build:</strong> Vendor-managed pipelines for build, scan, test, deploy to EKS/AKS/GKE.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Related Best Practices (CI/CD):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Automate Model Validation ✅:</strong> After merge to main, run "model smoke test" job (10 sample prompts) checking for expected output patterns (e.g., no hallucinations).</li>
        <li><strong>Canary vs. Blue/Green Rollouts 🚦:</strong> Deploy new models to small subset of pods (10% traffic). Monitor metrics (latency, cost, hallucination) for 15 min before full rollout.</li>
        <li><strong>Security Scanning 🛡️:</strong> Integrate container scanning (Trivy, Clair) in pipeline to catch vulnerabilities in base images.</li>
      </ul>
    </div>
  );
}

function FrameworksContent() {
  return (
    <div>
      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">PyTorch</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features (2025):</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Dynamic Computation Graphs (Eager Execution):</strong> Intuitive, Python-native debugging. Heavily used in research. <span className="citation">(digitalocean.com)</span></li>
        <li><strong>PyTorch Lightning &amp; TorchServe:</strong> Lightning simplifies distributed training. TorchServe for production inference with multi-model serving, versioning, metrics.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Related Best Practices (PyTorch):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Hugging Face Transformers + DistributedDataParallel 🚀:</strong> Wrap model in `torch.nn.parallel.DistributedDataParallel` to fine-tune LLMs (Llama 3) on multi-GPU, cutting training time.</li>
        <li><strong>ONNX Export for Serving ⚙️:</strong> Export PyTorch models to ONNX, run inference on optimized runtimes (ORT, TensorRT) for ~30% lower latency than raw TorchServe. <span className="citation">(digitalocean.com)</span></li>
        <li><strong>Mixed-Precision Training (AMP) 💡:</strong> Use `torch.cuda.amp` for automatic mixed precision, reducing VRAM usage by ~50% without sacrificing accuracy.</li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">TensorFlow</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features (2025):</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Eager Execution (TF 2.x) &amp; tf.function:</strong> More Pythonic, bridging gap with PyTorch.</li>
        <li><strong>TensorFlow Serving &amp; TFLite (LiteRT):</strong> TF Serving for high-throughput inference (A/B testing, canary rollouts). TFLite for mobile/edge (quantized, &lt;10MB footprints). <span className="citation">(digitalocean.com)</span></li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Related Best Practices (TensorFlow):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Use TFX for Production Pipelines 🔗:</strong> Combine `tf.data`, TFX Transform, TFX Trainer, TF Serving for reproducible data-to-model pipelines.</li>
        <li><strong>TPU Acceleration for Fine-Tuning (GCP) ⚡:</strong> Use `tf.distribute.TPUStrategy` to fine-tune large models (PaLM variants) with ~2x speedup vs. GPU on GCP.</li>
        <li><strong>Cross-Framework via ONNX 🔄:</strong> Train in TensorFlow, export to ONNX, serve on Triton Inference Server for multi-framework support. <span className="citation">(digitalocean.com)</span></li>
      </ul>
    </div>
  );
}

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

function OrchestrationContent() {
  return (
    <div>
      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">LangChain</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features (2025):</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Modular Prompt Chaining:</strong> Build pipelines by linking prompt "chains" (e.g., summarize -&gt; translate -&gt; validate) in one API call. <span className="citation">(en.wikipedia.org)</span></li>
        <li><strong>Document Loaders &amp; Memory Abstractions:</strong> Connectors for PDF, HTML, S3, databases. Stateful memory components for conversational GenAI.</li>
        <li><strong>Tool Integrations:</strong> Native wrappers for Google Search, Wikipedia, SQL, custom toolkits—turn LLMs into "agents" calling external APIs.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices (LangChain):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Linear Task Dependencies (Sequential Chains) ➡️:</strong> For "Doc -&gt; Extract -&gt; Summarize," build SequentialChain for easier debugging/cost tracking.</li>
        <li><strong>Few-Shot Retrieval with RAG Chain 📚:</strong> Use `RetrievalQAChain` to auto-call vector DB, fetch top-k docs, feed as context to GPT to reduce hallucinations. <span className="citation">(md-hadi.medium.com)</span></li>
        <li><strong>Prompt Tuning with LangSmith 📊:</strong> Use LangSmith logs to A/B test chain variations, measure user satisfaction to pick optimal prompt ordering.</li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">LangGraph</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features (2025):</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Graph-Based Task Orchestration:</strong> Represent workflows as directed graphs (DagNodes) for cyclic "agentic" loops (Plan -&gt; Execute -&gt; Evaluate -&gt; Plan again). <span className="citation">(orq.ai, projectpro.io)</span></li>
        <li><strong>Stateful Multi-Agent Coordination:</strong> Maintain unified state object passing through nodes, ideal for RAG systems needing context retention.</li>
        <li><strong>Built-In Debugging &amp; Visualization:</strong> Live DAG visualization showing token counts, latency per node, cost breakdown for rapid iteration.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices (LangGraph):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Agentic Workflow Design 🤖:</strong> For complex tasks (Research -&gt; Draft -&gt; Review), assign separate agent nodes (ResearchAgent, DraftAgent), each can use different models.</li>
        <li><strong>Error Handling and Fallbacks ⚠️:</strong> Insert "Check" nodes after critical steps. If ResearchAgent has low confidence, route to backup agent instead of failing. <span className="citation">(orq.ai)</span></li>
        <li><strong>Dynamic Parallel Execution  paralelogram:</strong> For multiple documents, spin up parallel subgraphs, then merge outputs in final "Aggregator" node for faster throughput.</li>
      </ul>

      <h4 className="font-bold mt-4 mb-3 text-lg tool-title">CrewAI</h4>
      <p className="text-sm text-gray-600 mb-1">Key Features (2025):</p>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base pl-4 pb-3">
        <li><strong>Crew-Based Multi-Agent Framework:</strong> Define Agents and Tasks in YAML, execute collaboratively via Crew Manager.</li>
        <li><strong>Dashboard &amp; Telemetry:</strong> Visualize agent timelines and token usage in real time.</li>
      </ul>
      <h5 className="font-semibold mt-2 mb-1 text-base prompt-eng-title">Prompt-Engineering Best Practices (CrewAI):</h5>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4 pb-3">
        <li><strong>Single Responsibility Agents:</strong> Keep each agent focused (e.g., ResearchAgent, WriteAgent) for easier debugging.</li>
        <li><strong>Centralized Crew State:</strong> Share JSON-serializable state across agents and persist checkpoints after critical steps.</li>
      </ul>
    </div>
  );
}

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
