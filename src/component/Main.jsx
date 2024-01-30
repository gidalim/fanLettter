import { useState, } from 'react';
import AddComment from './comment/AddComment';
import { styled } from 'styled-components';
import FormRenderer from './FormRenderer';
// const responseData = async () => {

// }
// json 데이터 가져오는 양식을 공부하고 적을 예정

const initialState = [{
  id: 1, profile: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg", name: '김철수', content: '사랑해요', time: 'none'
},
{
  id: 2, profile: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg", name: '김영호', content: '힘내세요', time: 'none'
}]


function Main() {

  const [list, setList] = useState(initialState);


  const addFanLetter = (item) => {
    setList((list) => [...list, item]);
    console.log('리스트가 생성되었음')
  }


  return (
    <>
      <form className='createBox'>고정될 박스 위치
        <AddComment
          onSubmit={addFanLetter}
        />
      </form>

      <StMain className='loadBox'>
        박스가 나올 위치
        <FormRenderer
          list={list}
        />
      </StMain >

    </>
  )
}


const StMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1100px;
  height: auto;
  border: 1px solid black;
  color: black;
  padding: 30px;
`

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1100px;
  height: auto;
  border: 1px solid black;
  color: black;
  padding: 30px;
`


export default Main
