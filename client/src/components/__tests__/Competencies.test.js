import { render, screen } from '@testing-library/react';
import Competencies from '../Competencies';

test('renders competencies heading', () => {
  render(<Competencies />);
  const heading = screen.getByText(/Core Competency Breakdown/i);
  expect(heading).toBeInTheDocument();
});
