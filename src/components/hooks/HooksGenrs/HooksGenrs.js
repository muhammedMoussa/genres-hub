import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core';

import { api, headers } from '../../../config';
import GenerCard from '../../GenerCard';
import './styles.css'
import GHSkeleton from '../../GHSkeleton/GHSkeleton';
import ErrorAlert from '../../ErrorAlert/ErrorAlert';

function HooksGenrs() {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState([])

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setError(false);
    };

    const getData = () =>
      fetch(api.GENRS_API, { headers })
        .then((res) => res.json())
        .then((res) => res.data)
  
    useEffect(() => {
      setLoading(true)
      getData()
        .then((data) => {
          setLoading(false)
          setData(data)
        })
        .catch(() => {
            setLoading(false)
            setError(true)
        })
    }, [])
  
    return (
        <>
          {loading && (<GHSkeleton />)}
          <div className="genrs__container">
            <h1>List of music genres for you!</h1>
            <Grid container spacing={5}>
              {data?.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id} >
                  <GenerCard data={item} />
                </Grid>
              ))}
            </Grid>
          </div>
          
          <ErrorAlert open={error} handleClose={() => handleClose()}/>
        </>
    )
}

export default HooksGenrs;