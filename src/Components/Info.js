import React from 'react';
import { personalInfo } from '../data';

function Info() {
  return (
    <div className='d-content'>
      {personalInfo.map(({title,description},index)=>{
        return(<>            <li className='info__item' key={index}>
                <span className='info__title'>{title}</span>
                <span className='info__description'>{description}</span>
            </li>
            </>

        )
      })}
    </div>
  )
}

export default Info
