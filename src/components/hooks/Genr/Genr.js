import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { api, headers } from '../../../config';
import GHSkeleton from '../../GHSkeleton/GHSkeleton';
import Artists from '../../Artists/Artists';
import { Fade } from '@material-ui/core';
import ErrorAlert from '../../ErrorAlert/ErrorAlert';

function Genr() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState([])
    let { id } = useParams();
    const [error, setError] = React.useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setError(false);
    };

    React.useEffect(() => {
      const getData = () => {
        setLoading(true)
        return fetch(`${api.GENR_CHART_API}/${id}`, { headers })
          .then((res) => res.json())
          .then((res) => res.artists.data)
          .then((res) => {
            setLoading(false)
            setData(res)
          })
          .catch(() => {
            setLoading(false)
            setError(true)
          })
      }
      
      getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
  
    return (
      <div>
        {loading && (<GHSkeleton />)}
        {data && (
          <Fade in>
            <Artists data={data} />
          </Fade>
        )}
        <ErrorAlert open={error} handleClose={() => handleClose()}/>
      </div>
    )
}

export default Genr
