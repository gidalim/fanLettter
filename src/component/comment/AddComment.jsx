import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button'


function AddComment(comment) {


  const [name, setName] = useState('');
  const [content, setContent] = useState('');


  const addName = (e) => {
    setName(e.target.value)
  }
  const addcontent = (e) => {
    setContent(e.target.value)
  }

  const addButtonHandler = (e) => {
    if (!name.trim() || !content.trim()) {
      alert('닉네임과 팬레터 내용을 입력해주세요!');
      return;
    }
    const addComment = {
      id: uuidv4(),
      name,
      content,
      time: new Date().toISOString(),
    };
    setName('')
    setContent('')
    comment.onSubmit(addComment)
    window.alert('팬레터를 발송했습니다!')
  }



  return (
    <>
      <div className='inputData'>
        <input type="text"
          className="inputName"
          maxLength={'10'}
          placeholder='닉네임을 작성해주세요.'
          value={name}
          onChange={addName}
        />
        <input type="text"
          className='inputContent'
          maxLength={'120'}
          placeholder='내용을 작성해주세요.'
          value={content}
          onChange={addcontent}
        />
        <div>
          <select>누구에게 보내실 건가요?</select>
        </div>
        <Button clickEventHandler={() => {
          addButtonHandler();
        }}
        >발송하기</Button>
      </div>
    </>
  )
}

export default AddComment