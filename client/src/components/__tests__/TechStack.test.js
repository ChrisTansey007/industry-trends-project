import { render, screen } from '@testing-library/react';
import TechStack from '../TechStack';

test('renders tech stack heading', () => {
  render(<TechStack />);
  const heading = screen.getByText(/The Essential Tech Stack for Full-Stack GenAI/i);
  expect(heading).toBeInTheDocument();
});
