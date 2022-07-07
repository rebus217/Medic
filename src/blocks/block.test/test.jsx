import React from 'react'
import './test.sass'

function Test() {

    function changeColorHandler(e : MouseEvent<HTMLDivElement>) {
        e.target.classList.toggle('test_blue')
    }

  return (
    <div className='test' onClick={(e)=> changeColorHandler(e)}>Test</div>
  )
}

export default Test