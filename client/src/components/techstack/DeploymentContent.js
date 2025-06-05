import React from 'react';

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

export default DeploymentContent;
