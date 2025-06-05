import React from 'react';

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


export default FrameworksContent;
