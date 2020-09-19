import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { api, headers } from '../../../config';
import GHSkeleton from '../../GHSkeleton/GHSkeleton';
import Artists from '../../Artists/Artists';
import { Fade } from '@material-ui/core';

function Genr() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState([])
    let { id } = useParams();
    
    React.useEffect(() => {
      const getData = () => {
        setLoading(true)
        return fetch(`${api.GENR_CHART_API}/${id}`, { headers })
          .then((res) => res.json())
          .then((res) => res.artists.data)
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
      }
      
      getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
  
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
