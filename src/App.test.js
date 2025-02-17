import { render, screen } from '@testing-library/react';
import App1 from './App';
import App_project from './App_project';
import Route_react from './Route_react';
import App from './App';

test('renders learn react link', () => {
  render(<Route_react />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
