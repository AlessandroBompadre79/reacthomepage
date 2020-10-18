import React from 'react';
import { render } from '@testing-library/react';
import Main from './main.component';

it.skip("renders without crashing", () => {
  render(<Main />);
});