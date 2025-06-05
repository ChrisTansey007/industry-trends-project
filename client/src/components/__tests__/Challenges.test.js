import { render, screen } from '@testing-library/react';
import Challenges from '../Challenges';

test('renders challenges heading', () => {
  render(<Challenges />);
  const heading = screen.getByText(/Solving the Toughest Challenges in Full-Stack GenAI/i);
  expect(heading).toBeInTheDocument();
});
