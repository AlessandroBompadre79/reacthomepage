import * as ActionTypes from './action.types';

export const Dishes = ( state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action ) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading:false, errMesss: null, dishes: action.payload};
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading:true, errMesss: null, dishes: []};
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading:false, errMesss: action.payload, dishes: []};
        default:
            return state;
    }
}