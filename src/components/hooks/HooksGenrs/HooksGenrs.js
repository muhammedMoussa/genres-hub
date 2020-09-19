import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { api } from '../../../config';
import GenerCard from '../../GenerCard';
import './styles.css'

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
          <Grid container spacing={5} className="">
            {loading && 
            <div>
            <Skeleton variant="text" />
            <Skeleton variant="circle" width={40} height={40} />
            <Skeleton variant="rect" width={210} height={118} />
          </div>
            }
            {data?.map((item) => (
                <Grid item xs={12} md={4} key={item.id} >
                  <GenerCard data={item} />
                </Grid>
              ))}
          </Grid>
        </div>

    )
}

export default HooksGenrs;