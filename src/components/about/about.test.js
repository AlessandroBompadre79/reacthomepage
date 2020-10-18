import React from 'react';
import { render } from '@testing-library/react';
import About from './about.component';

it.skip("renders without crashing", () => {
   render(<About/>);
});