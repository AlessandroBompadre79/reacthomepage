import React from 'react';
import { render } from '@testing-library/react';
import Comment from './comment.component';

it.skip("renders without crashing", () => {
   render(<Comment/>);
});