import React from 'react'

function Bar_icons({Icon, title}) {
  return (
    <div className='flex flex-col items-center cursor-pointer'>
      {Icon} 
      <h3>{title}</h3>
        
    </div>
  )
}

export default Bar_icons