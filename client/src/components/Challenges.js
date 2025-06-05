import React, { useState } from 'react';
import colors from '../constants/colors';

function ChallengeCard({ title, subtitle, color, sections }) {
  const [open, setOpen] = useState(false);
  const headerStyle = { backgroundColor: color };
  return (
    <div className="mb-4 border rounded-lg shadow" onClick={() => setOpen(!open)}>
      <div className="p-4 cursor-pointer" style={headerStyle}>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-white opacity-90">{subtitle}</p>
      </div>
      {open && (
        <div className="p-4 bg-white space-y-4 text-gray-700">
          {Object.entries(sections).map(([label, items]) => (
            <div key={label}>
              <h4 className="font-semibold">{label}</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {items.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const challenges = [
  {
    title: 'Latency',
    subtitle: 'Optimizing models and infrastructure for real-time response.',
    color: colors.coral,
    sections: {
      AWS: [
        'Bedrock latency-optimized inference cuts response times up to 50%.',
        'SageMaker caching and serverless endpoints speed up cold starts.'
      ],
      Azure: [
        'Token compression and few-shot prompting reduce overall latency 2–3×.',
        'Regional deployments and streaming endpoints minimize network delays.'
      ],
      GCP: [
        'Custom machine types and quantization shrink models by 30%.',
        'Edge deployments keep inference close to data sources.'
      ],
      'Prompt Engineering': [
        'Write concise prompts and chunk complex tasks (SoT).',
        'Enable streaming tokens for faster perceived responses.'
      ]
    }
  },
  {
    title: 'Hallucination',
    subtitle: 'Implementing RAG and fine-tuning to ensure factual accuracy.',
    color: colors.yellow,
    sections: {
      AWS: [
        'Bedrock Agents route uncertain answers to knowledge bases.',
        'Guardrails and reasoning checks verify generated facts.'
      ],
      Azure: [
        'Content Safety filters hallucinations in real time.',
        'Cognitive Search + RAG grounds responses in documents.'
      ],
      GCP: [
        'Vertex AI RAG frameworks reduce hallucinations by over 70%.',
        'Matching Engine retrieves top passages for grounding.'
      ],
      'Prompt Engineering': [
        'Use RAG-style prompts and Chain-of-Verification.',
        'Anchor with correct examples to limit fabrications.'
      ]
    }
  },
  {
    title: 'Cost Management',
    subtitle: 'Balancing performance with token usage and computational expense.',
    color: colors.green,
    sections: {
      AWS: [
        'Spot or Reserved Instances cut training costs up to 70%.',
        'Bedrock caching and tiered models lower inference spend.',
        'Offload preprocessing to Lambdas to minimize idle compute.'
      ],
      Azure: [
        'Cost dashboards and budget alerts track token spend.',
        'Choose provisioned throughput or pay-per-token as needed.'
      ],
      GCP: [
        'Cost recommendations and preemptible VMs reduce bills.',
        'Reserve GPUs only for inference workloads.'
      ],
      'Prompt Engineering': [
        'Minimize token count and use lighter models when possible.',
        'Limit output length to avoid runaway costs.'
      ]
    }
  },
  {
    title: 'Scalability',
    subtitle: 'Building robust CI/CD pipelines for models serving millions of users.',
    color: colors.blue,
    sections: {
      AWS: [
        'Multi-Model Endpoints host many models behind one endpoint.',
        'Serverless Inference scales automatically based on traffic.',
        'ECS/EKS with Lambda orchestrates large fleets.'
      ],
      Azure: [
        'AKS auto-scales pods running inference services.',
        'Functions and Durable Entities orchestrate pipelines.',
        'Azure DevOps automates retraining and deployments.'
      ],
      GCP: [
        'GKE HPA scales pods across regions for global access.',
        'Cloud Run and Functions decouple scalable components.',
        'Vertex AI pipelines scale training and serving.'
      ],
      'Prompt Engineering': [
        'Compose micro-prompts so tasks can run in parallel.'
      ]
    }
  }
];

function Challenges() {
  return (
    <section id="challenges" className="my-16">
      <h2 className="text-3xl font-bold text-center mb-2">Solving the Toughest Challenges in Full-Stack GenAI</h2>
      <p className="text-center max-w-3xl mx-auto mb-8" style={{color: colors.blue}}>
        Cloud providers and prompt engineers must collaborate to overcome latency, hallucination, cost, and scalability hurdles.
      </p>
      <div className="space-y-4">
        {challenges.map(ch => (
          <ChallengeCard key={ch.title} {...ch} />
        ))}
      </div>
    </section>
  );
}

export default Challenges;
