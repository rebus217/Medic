import React from 'react'
import './test.sass'

function Test() {

    function changeColorHandler(e) {
        console.log(e)
    }

  return (
    <div className='test' onClick={(e)=> changeColorHandler(e)}>Test</div>
  )
}

export default Test