import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';

function GHSkeleton() {
    return (
      <Grid container>
        { Array.from({length: 20}, (x, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} >
              <div>
                <Skeleton variant="rect" height={118} /> <br />
                <Skeleton variant="text" height={50}/>
              </div>
            </Grid>
          ))}
      </Grid>
        
    );
}
 
export default GHSkeleton
