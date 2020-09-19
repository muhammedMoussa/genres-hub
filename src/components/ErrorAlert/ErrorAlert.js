import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function ErrorAlert({open, handleClose}) {
    return (
        <div>
           <Snackbar open={open} autoHideDuration={2000} onClose={() => handleClose()}>
                {/* @TODO: HANDLE CUSTOME ERRORS */}
                <Alert severity="error">Oops some error occurred try again</Alert>
            </Snackbar> 
        </div>
    )
}

export default ErrorAlert
