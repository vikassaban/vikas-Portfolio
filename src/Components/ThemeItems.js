import React from 'react'

function ThemeItems({color,img,changeColor}) {
  return (
    <div>
      <img src={img} alt='' className='theme__img' onClick={()=>changeColor(color)}/>
    </div>
  )
}

export default ThemeItems
