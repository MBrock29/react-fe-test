import { render, screen } from '@testing-library/react';
import App from './App';

it('renders title and loading indicator', () => {
  render(<App />);

  expect(screen.getByText(/edozo weather app/i)).toBeInTheDocument();
  expect(screen.getByText(/loading.../i)).toBeInTheDocument();
});

