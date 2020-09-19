import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core';

import { api } from '../../../config';
import GenerCard from '../../GenerCard';
import './styles.css'
import GHSkeleton from '../../GHSkeleton/GHSkeleton';

function HooksGenrs() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState([])

    const getData = () =>
      fetch(api.GENRS_API, {
        headers: {
            'Accept-Language': 'en-US'
          }
      })
        .then((res) => res.json())
        .then((res) => res.data)
  
    useEffect(() => {
      setLoading(true)
      getData()
        .then((data) => {
          setLoading(false)
          setData(data)
        })
        .catch(err => {
            // @TODO: HANDLE ERROR
            setLoading(false)
            console.log(err)
        })
    }, [])
  
    return (
        <div className="genrs__container">
          <h2>List of music genres for you!</h2>
          <Grid container spacing={5}>
            {loading && (<GHSkeleton />)}
            {data?.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id} >
                <GenerCard data={item} />
              </Grid>
            ))}
          </Grid>
        </div>

    )
}

export default HooksGenrs;