import { render, screen } from '@testing-library/react';
import StringCalculator from './Calculater'

test('renders learn react link', () => {
  render(<StringCalculator />);
  const linkElement = screen.getByText(/String Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
