import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo header', () => {
  render(<App />);
  const titleElement = screen.getByText(/Todo/i);
  expect(titleElement).toBeInTheDocument();
});
