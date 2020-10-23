import PAGES from '../shared/constants/pages.js';
import { COMMENTS } from '../shared/constants/comments';
import { PROMOTIONS } from '../shared/constants/promotions';
import { LEADERS } from '../shared/constants/leaders';

export const initialState =  {
    dishes: PAGES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    selectedDish: null
};

export const Reducer = (state = initialState, action) => {
    return state;
}