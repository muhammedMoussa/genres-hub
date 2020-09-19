import { 
    FETCH_GET_GENRS_PENDING, 
    FETCH_GET_GENRS_SUCCESS, 
    FETCH_GET_GENRS_ERROR 
} from '../../config'

const initialState = {
    pending: false,
    genrs: [],
    error: null,
    test: 'aaaaaaaaaa'
}

 function rootReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_GET_GENRS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_GET_GENRS_SUCCESS:
            return {
                ...state,
                pending: false,
                genrs: action.genrs
            }
        case FETCH_GET_GENRS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getGenrs = state => state.genrs;
export const getGenrsPending = state => state.pending;
export const getGenrsError = state => state.error;

export default rootReducer;
