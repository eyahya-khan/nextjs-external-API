import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';

test('renders copyright correct', () => {
  const { queryByText } = render(<Footer />);
  queryByText('@Copyright by');
});
