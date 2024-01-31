import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Header(content) {




  return (
    <>
      <Stheader className='headerSrc' >
        <StName>


          <div>팬레터 제작하기</div>
          <div>React_4기 박강토</div>
        </StName>

        <h1>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </h1>
      </Stheader>


      {content.children}
    </>
  )
}

const Stheader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  height: 300px;
  background-color: #a5c3ff;
  `

const StName = styled.h1`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-top: 20px;
  background-color: azure;
`

const StBtn = styled.h1`
  display: flex;
  width: 300px;
`

export default Header