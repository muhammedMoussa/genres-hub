import React from 'react'
import { Fab } from '@material-ui/core'
import NavigationIcon from '@material-ui/icons/Navigation';

export default function BackToTop() {
    // @TODO: USE OR REMOVE
    return (
        <div>
            <Fab color="primary" aria-label="add">
                <NavigationIcon />
            </Fab>
        </div>
    )
}
