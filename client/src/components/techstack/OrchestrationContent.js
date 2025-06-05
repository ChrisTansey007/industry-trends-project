import React from 'react';

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

export default OrchestrationContent;
