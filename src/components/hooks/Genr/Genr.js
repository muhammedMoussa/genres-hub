import React from 'react'
import { useParams } from 'react-router-dom';

function Genr() {
    let { id } = useParams();
    
    return (
        <div>
            Genr {id}
        </div>
    )
}

export default Genr
