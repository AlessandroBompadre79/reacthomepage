import React from 'react';
import { render } from '@testing-library/react';
import Home from './home.component';
import PAGES from '../../shared/constants/pages.js';
import { COMMENTS } from '../../shared/constants/comments';
import { PROMOTIONS } from '../../shared/constants/promotions';
import { LEADERS } from '../../shared/constants/leaders';

const STATE = {
    dishes: PAGES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    selectedDish: null
};


it("renders without crashing", () => {
  render(<Home dish={STATE.dishes.filter((dish) => dish.featured)[0]}
  promotion={STATE.promotions.filter((promo) => promo.featured)[0]}
  leader={STATE.leaders.filter((leader) => leader.featured)[0]}/>);
});