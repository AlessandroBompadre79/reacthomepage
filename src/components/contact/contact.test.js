import React from 'react';
import { render } from '@testing-library/react';
import Contact from './contact.component';

it.skip("renders without crashing", () => {
   render(<Contact/>);
});