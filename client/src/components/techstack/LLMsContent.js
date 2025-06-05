import React from 'react';

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

export default LLMsContent;
