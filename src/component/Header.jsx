import React from 'react'
import Navigation from './Navigation'

function Header(content) {
  return (
    <>
      <header className='headerSrc' >
        <div>팬레터 제작하기</div>
        <div>React_4기 박강토</div>


      </header>


      {content.children}
    </>
  )
}

export default Header