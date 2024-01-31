import React from 'react'
import styled from 'styled-components'

function Header(content) {
  return (
    <>
      <Stheader className='headerSrc' >
        <div>팬레터 제작하기</div>
        <div>React_4기 박강토</div>


      </Stheader>


      {content.children}
    </>
  )
}

const Stheader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  
  `


export default Header