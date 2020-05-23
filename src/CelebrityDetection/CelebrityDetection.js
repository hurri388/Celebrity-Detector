import React from 'react';
import './CelebrityDetection.css';
function CelebrityDetection ({imgURL})
{
    return(<div className='center'>
        <div className='absolute'>
            <img src={imgURL} width='500px' height='auto'/>
            </div>
            </div>);
}
export default CelebrityDetection;