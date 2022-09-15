import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from './app';

test('renders page with a header', () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const header = container.querySelector('h2');
  expect(header).toBeInTheDocument();
});
