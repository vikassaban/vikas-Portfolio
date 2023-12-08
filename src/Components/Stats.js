import React from 'react';
import { stats } from '../data';
import parse from 'html-react-parser';

function Stats() {
  return (
    <div className='d-content'>
      {stats.map(({no,title},index)=>{
        return(
            <div className='stats__box' key={index}>
                <h3 className='stats__no'>{no}</h3>
                <p className='stats__title'>{parse(title)}</p>
            </div>
        )
      })}
    </div>
  )
}

export default Stats
