import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Button from '../component/Button';
import AddComment from '../component/comment/AddComment';
import FormRenderer from '../component/comment/FormRenderer';




function Home({ addedFanLetter, list }) {

  const [filteredData, setFilteredData] = useState([...list]);
  const [selectedBtn, setSelectedBtn] = useState('카리나');
  const members = ['카리나', '지젤', '윈터', '닝닝']

  useEffect(() => {
    setFilteredData(list.filter(item => item.selectedPage === '카리나'));
  }, [list]);

  // useEffect 안쓰면 데이터가 추가가 안됨


  const addFanLetter = (item) => {
    addedFanLetter(item);

  };


  const filteredFanLetter = (selectedPage) => {
    const fanLetterData = [...list]
    const newFilteredData = fanLetterData.filter((item) => item.selectedPage === selectedPage)
    setFilteredData(newFilteredData)
    setSelectedBtn(selectedPage)

  }



  return (
    <>
      <StHeader>
        <StName>
          <div>팬레터 제작하기</div>
          <div>React_4기 박강토</div>
        </StName>
        <StMember>
          {members.map(member => (
            <Button
              key={member}
              isActive={selectedBtn === member}
              clickEventHandler={() => filteredFanLetter(member)}
            >
              {member}
            </Button>
          ))}

        </StMember>
      </StHeader>

      <StBox className='createBox'>
        <AddComment
          onSubmit={addFanLetter}
        />
      </StBox>
      <StMain className='loadBox'>
        <StUl>
          <FormRenderer
            filteredList={filteredData}
          />
        </StUl>
      </StMain >


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
  background-image: url('../assets/bgImg.jpg');
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



export default Home