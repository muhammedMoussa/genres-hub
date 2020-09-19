import { 
    FETCH_GET_GENRS_PENDING, 
    FETCH_GET_GENRS_SUCCESS, 
    FETCH_GET_GENRS_ERROR 
} from '../../config'
// @TODO: ADD ANOTHER ACTIONS WHEN FIX REDUX ISSUE

export function fetchGenrsPending() {
    return {
        type: FETCH_GET_GENRS_PENDING
    }
}

export function fetchGenrsSuccess(genrs) {
    return {
        type: FETCH_GET_GENRS_SUCCESS,
        genrs: genrs
    }
}

export function fetchGenrsError(error) {
    return {
        type: FETCH_GET_GENRS_ERROR,
        error: error
    }
}
