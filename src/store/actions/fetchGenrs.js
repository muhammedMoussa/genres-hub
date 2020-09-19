import { api } from "../../config";
import { fetchGenrsPending, fetchGenrsSuccess, fetchGenrsError } from ".";

function fetchGenrs() {
    return dispatch => {
        dispatch(fetchGenrsPending());
        fetch(api.GENRS_API)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchGenrsSuccess(res.data));
            return res.data;
        })
        .catch(error => {
            dispatch(fetchGenrsError(error));
        })
    }
}

export default fetchGenrs;
