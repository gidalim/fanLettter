import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button'
import profile from '../../assets/profile.png';
import styled from 'styled-components';


function AddComment(comment) {


  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [selectedPage, setSelectedPage] = useState('karina');


  const addName = (e) => {
    setName(e.target.value)
  }
  const addcontent = (e) => {
    setContent(e.target.value)
  }


  const addButtonHandler = (e) => {
    // console.log(e) 이벤트가 잘 넘어오는 지 체크(확인했음)
    e.preventDefault();

    if (!name.trim() || !content.trim()) {
      alert('닉네임과 팬레터 내용을 모두 입력해주세요!');
      return;
    }
    const addComment = {
      id: uuidv4(),
      profile: profile,
      name,
      content,
      time: new Date().toISOString(),
      selectedPage: selectedPage
    };
    setName('')
    setContent('')
    comment.onSubmit(addComment)
    window.alert('팬레터를 발송했습니다!')
  }


  return (
    <>
      <StBox className='inputData'>
        <StSection>
          <StLabel>닉네임:</StLabel>
          <input type="text"
            className="inputName"
            maxLength={'10'}
            placeholder='닉네임은 10글자까지 작성 가능해요.'
            value={name}
            onChange={addName}
          />
        </StSection>
        <StSectionComment>
          <StLabel>팬레터:</StLabel>
          <textarea type="text"
            className='inputContent'
            maxLength={'120'}
            placeholder='팬레터는 최대120자까지 작성이 가능해요.'
            value={content}
            onChange={addcontent}
          />
        </StSectionComment>
        <StSection>
          <StLabel>누구에게 보내실 건가요? </StLabel>
          <StSelectArea>
            <select
              value={selectedPage}
              onChange={(e) =>
                setSelectedPage(e.target.value)}>
              <option value="karina">카리나</option>
              <option value="giselle">지젤</option>
              <option value="winter">윈터</option>
              <option value="ningning">닝닝</option>
            </select>
            <Button clickEventHandler={(e) => {
              addButtonHandler(e);
            }}
            >발송하기</Button>
          </StSelectArea>
        </StSection>
      </StBox>
    </>
  )
}

export default AddComment


const StSection = styled.section`
  display: flex;
  align-items: center;
  width: 500px;
  height: 30px;
  
  input{
    width: 300px;
  }
  
`
const StSectionComment = styled.section`
  display: flex;
  align-items: center;
  width: 500px;
  height: 230px;

  textarea{
    font-family: inherit;
    width: 400px;
    height: 200px;
    font-size: 1.3rem;
  }
`
const StLabel = styled.label`
  font-size: 1.2rem;
  padding-right: 20px;
`

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  background-color: #7a4ea0;
  padding: 15px;
`

const StSelectArea = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 240px;
`