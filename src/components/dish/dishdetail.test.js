import React from 'react';
import { render } from '@testing-library/react';
import DishDetail from './dishdetail.component';

it("renders without crashing", () => {
  render(<DishDetail />);
});