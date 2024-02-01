import React from 'react'
import styled from 'styled-components';
import Button from '../Button';


function DetailComment({ isOpen, onClose, onSave, content, setContent }) {
  if (!isOpen) return null;


  return (
    <StModalBox className='modalOverlay'>
      <div className='modalContents'>
        <StTextarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        >
        </StTextarea>
        <StModalBtn>
          <Button clickEventHandler={onSave}>수정완료</Button>
          <Button clickEventHandler={onClose}>수정취소</Button>
        </StModalBtn>
      </div>
    </StModalBox>

  )
}

export default DetailComment


const StModalBox = styled.div`
  display: flex;
  width: 860px;
`

const StTextarea = styled.textarea`
  width: 855px;
  height: 290px;
  background-color: #457299;
  border: 1px solid black;
  color: #e5d2d2;
  font-size: 1.3rem;
  line-height: 1.7;
`


const StModalBtn = styled.div`
  width: 200px;
  height: 30px;
  gap: 5px;
  padding-top: 5px;

`

