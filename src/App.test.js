//Test query DOM case
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Axios example - netlify/i);
  expect(linkElement).toBeInTheDocument();
});