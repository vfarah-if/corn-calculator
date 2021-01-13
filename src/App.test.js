import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('should contain a header with river trip adviser', () => {
    render(<App />);
    const linkElement = screen.getByText(/River trip adviser/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should contain a corn quantity label', () => {
    render(<App />);
    const linkElement = screen.getByText(/Corn Quantity:/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should contain a quantity with initial default value of 1', () => {
    const component = render(<App />);
    
    const inputElement = component.container.querySelector('#cornQuantity');

    expect(inputElement).toBeTruthy();
    expect(inputElement.value).toBe("1");
  });

  test('should calculate the cost of 1 bag of corn at 25 pence', () => {
    render(<App />);
    
    const linkElement = screen.getByText(/£ 0.25/i);
    
    expect(linkElement).toBeInTheDocument();
  });

  test('should get default app in the expected html format', () => {
    const component = render(<App />);
          
    expect(component.container).toMatchSnapshot();
  });

});
