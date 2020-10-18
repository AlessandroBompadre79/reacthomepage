import React from 'react';
import { render } from '@testing-library/react';
import Menu from './menu.component';
import PAGES from '../../shared/constants/pages.js';

const STATE = {
     dishes: PAGES
};


it.skip("renders without crashing", () => {
   render(<Menu dishes={STATE.dishes} />);
});