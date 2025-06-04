import React from 'react';
import './index.css';
import MarketGrowth from './components/MarketGrowth';
import Competencies from './components/Competencies';
import TechStack from './components/TechStack';
import Challenges from './components/Challenges';
import RAGPipelines from './components/RAGPipelines';

function App() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8 gradient-text">Industry Trends: The Modern Generative AI Engineer</h1>
      <MarketGrowth />
      <Competencies />
      <TechStack />
      <RAGPipelines />
      <Challenges />
    </div>
  );
}

export default App;
