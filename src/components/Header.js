import React from 'react'

function Header({test}) {
  return (
    <div className='fancy-h1' data-testid='h1tag'>{test}</div>
  )
}

export default Header