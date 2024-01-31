import styled from 'styled-components'
import Button from './Button'



function Header({ filterFnc }) {



  const filteredFanLetter = (selectedPage) => {
    filterFnc(selectedPage);
  }


  return (
    <>
      <StHeader>
        <StName>


          <div>팬레터 제작하기</div>
          <div>React_4기 박강토</div>
        </StName>

        <StMember>
          <Button clickEventHandler={() => {
            filteredFanLetter('karina');
          }}>카리나</Button>
          <Button clickEventHandler={() => {
            filteredFanLetter('giselle');
          }}>지젤</Button>
          <Button clickEventHandler={() => {
            filteredFanLetter('winter');
          }}>윈터</Button>
          <Button clickEventHandler={() => {
            filteredFanLetter('ningning');
          }}>닝닝</Button>
        </StMember>
      </StHeader>

    </>
  )
}

const StHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  height: 300px;
  background-color: #78797e;
  `

const StName = styled.h1`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-top: 20px;
  background-color: azure;
`

const StMember = styled.h1`
  display: flex;
  justify-content: space-between;
  width: 330px;
  height: 30px;
  gap: 15px;
  padding-bottom: 15px;
`


export default Header