import { 
    FETCH_GET_GENRS_PENDING, 
    FETCH_GET_GENRS_SUCCESS, 
    FETCH_GET_GENRS_ERROR 
} from '../../config'

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
