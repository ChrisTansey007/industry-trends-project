import { render, screen } from '@testing-library/react';
import MarketGrowth from '../MarketGrowth';

test('renders key metric headings', () => {
  render(<MarketGrowth />);
  expect(screen.getByText(/Job Growth/i)).toBeInTheDocument();
  expect(screen.getByText(/Median Salary/i)).toBeInTheDocument();
  expect(screen.getByText(/In-Demand Role/i)).toBeInTheDocument();
});
