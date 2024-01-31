import { useState, } from 'react';
import { styled } from 'styled-components';
import AddComment from './comment/AddComment';
import FormRenderer from './FormRenderer';
// const responseData = async () => {

// }
// json 데이터 가져오는 양식을 공부하고 적을 예정

const initialState = [{
  id: 1, profile: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg", name: '김철수', content: '사랑해요', time: '2024-01-29T02:07:09.423Z', selectedPage: '',
},
{
  id: 2, profile: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg", name: '김영호', content: '힘내세요', time: '2024-01-29T02:07:09.423Z', selectedPage: '',
}]


function Main() {

  const [list, setList] = useState(initialState);


  const addFanLetter = (item) => {
    setList((list) => [...list, item]);
    console.log('리스트가 생성되어 전달되었음', item.selectedPage)

  }

  return (
    <>
      <StBox className='createBox'>
        <AddComment
          onSubmit={addFanLetter}
        />
      </StBox>

      <StMain className='loadBox'>
        박스가 나올 위치
        <StUl>
          <FormRenderer
            list={list}
          />
        </StUl>
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

const StBox = styled.form`
  display: flex;
  width: 1100px;
  justify-content: center;
  margin-bottom: 2rem;
`
const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #f6f6c0;
`


export default Main
