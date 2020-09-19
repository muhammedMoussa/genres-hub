import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';

function GHSkeleton() {
    return (
        <div>
          <Skeleton variant="rect" height={118} /> <br />
          <Skeleton variant="text" height={50}/>
        </div>
    );
}

export default GHSkeleton
