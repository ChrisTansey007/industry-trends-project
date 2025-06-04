import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app heading', () => {
  render(<App />);
  const heading = screen.getByText(/Industry Trends: The Modern Generative AI Engineer/i);
  expect(heading).toBeInTheDocument();
});
