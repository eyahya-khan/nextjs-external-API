import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';

const allPostsData = [];

describe('index page', () => {
  test('renders title correct', () => {
    const { getByText } = render(<Index allPostsData={allPostsData} />);
    getByText('Welcome');
  });
});

describe('index page', () => {
  test('renders title correct', () => {
    const { queryByText } = render(<Index allPostsData={allPostsData} />);
    queryByText('Blog from file');
  });
});
