import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
export const fetchDishes = () => (dispatch) => { /* The fetchDishes as you see is a punk which returns a function which when called will try to fetch the dishes first by setting the isLoading to "True", and so that the spinner can be displayed and after a period of time the dishes are fetched and then added into the application. So, that is what this fetchDishes is going to show for us. */
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => { /* The fetchDishes as you see is a punk which returns a function which when called will try to fetch the dishes first by setting the isLoading to "True", and so that the spinner can be displayed and after a period of time the dishes are fetched and then added into the application. So, that is what this fetchDishes is going to show for us. */

return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => { /* The fetchDishes as you see is a punk which returns a function which when called will try to fetch the dishes first by setting the isLoading to "True", and so that the spinner can be displayed and after a period of time the dishes are fetched and then added into the application. So, that is what this fetchDishes is going to show for us. */
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});