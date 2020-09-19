// import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from 'actions';

import { fetchProductsSuccess, fetchProductsError, fetchProductsPending } from ".";

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            debugger
            dispatch(fetchProductsSuccess(res.data));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;
