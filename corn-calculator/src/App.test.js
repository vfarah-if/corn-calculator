import { render, screen } from '@testing-library/react';
import App from './App';

describe('given APP', () => {
  test('should contain a header with corn calculator', () => {
    render(<App />);
    const linkElement = screen.getByText(/Corn calculator/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders create a quantity input', () => {
    render(<App />);
    const linkElement = screen.getByText(/Quantity/i);
    expect(linkElement).toBeInTheDocument();
  });
  
});
