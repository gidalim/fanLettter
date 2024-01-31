import React from 'react'
import styled from 'styled-components';


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
        <button onClick={onSave}>수정완료</button>
        <button onClick={onClose}>수정취소</button>
      </div>
    </StModalBox>

  )
}

export default DetailComment


const StModalBox = styled.div`
  display: flex;
  width: 860px;
  height: 180px;
`

const StTextarea = styled.textarea`
  width: 855px;
  height: 175px;
  background-color: #457299;
  color: #e5d2d2;
  font-size: 1.3rem;
  line-height: 1.7;
`


