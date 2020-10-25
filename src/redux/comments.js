import { COMMENTS } from '../shared/constants/comments';
import * as ActionTypes from './action.types'

export const Comments = ( state = COMMENTS, action ) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT: 
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date());
            return state.concat(comment);
        default:
            return state;
    }
}