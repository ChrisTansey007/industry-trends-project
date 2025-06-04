import { render, screen } from '@testing-library/react';
import RAGPipelines from './RAGPipelines';

test('renders RAG section heading', () => {
  render(<RAGPipelines />);
  const heading = screen.getByText(/Retrieval-First Prompts & Document Q&A Pipelines/i);
  expect(heading).toBeInTheDocument();
});
