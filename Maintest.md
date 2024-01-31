import { useState, } from 'react';
import { styled } from 'styled-components';
import AddComment from './comment/AddComment';
import FormRenderer from './comment/FormRenderer';
import data from '../shared/data.json';



function Main({selectedMember}) {

  const [initialState] = useState([...data])
  const [list, setList] = useState([]);

  const addFanLetter = (item) => {
    setList((list)=> [...list, item])
  };


  const fanLetterData = [...initialState, ...list]
  const filteredData = selectedMember 
  ? fanLetterData.filter((item)=>item.selectedPage === selectedMember)
  : fanLetterData;


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
            list={filteredData}
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




// const addFanLetter = async (item) => {
//   try {

//     const loadData = JSON.parse(localStorage.getItem(item.selectedPage)) || {};
//     const setData = {
//       ...loadData,
//       ...item,
//     };

//     await new Promise(resolve => {
//       localStorage.setItem(item.selectedPage, JSON.stringify(setData));
//       resolve();
//     })
//     setList((list) => [...list, setData]);
//     localStorage.setItem(item.selectedPage, JSON.stringify(item));
    
//     console.log('리스트가 생성되어 전달되었음', item.selectedPage)

//   } catch (error) {
//     console.error('데이터를 가져오는 데 실패했음', error)
//   }
// }
