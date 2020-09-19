import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { api } from '../../../config';
import GHSkeleton from '../../GHSkeleton/GHSkeleton';
import Artists from '../../Artists/Artists';
import { Fade } from '@material-ui/core';

function Genr() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState([])

    let { id } = useParams();
    
    const getData = () =>
      fetch(`${api.GENR_CHART_API}/${id}`, {
        headers: {
            'Accept-Language': 'en-US'
          }
      })
        .then((res) => res.json())
        .then((res) => res.artists.data)
  
    React.useEffect(() => {
      setLoading(true)
      getData()
        .then((res) => {
          setLoading(false)
          setData(res)
          console.log(data)
        })
        .catch(err => {
            // @TODO: HANDLE ERROR
            setLoading(false)
            console.log(err)
        })
    }, [])
  
    return (
        <div>
            {loading && (<GHSkeleton />)}
            {data?.length && (
                <Fade in>
                    <Artists data={data} />
                </Fade>
            )}
        </div>
    )
}

export default Genr
