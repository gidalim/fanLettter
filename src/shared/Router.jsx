import { Route, Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react";
import data from './data.json';
import Home from "../pages/Home";
import Detail from "../pages/Detail";
// import styled from "styled-components";




const Router = () => {

  const [list, setList] = useState([...data])

  const addFanLetter = (newLetter) => {
    console.log('새로운 팬레터 생성', newLetter);
    setList(list => [...list, newLetter]);
  }



  const deleteFanLetter = (id) => {
    setList(list.filter(letter => letter.id !== id))
  }

  const updateFanLetter = (updateLetter) => {
    setList(list.map(letter => letter.id === updateLetter.id ? updateLetter : letter))
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="member/*"
          element={
            <Home
              list={list}
              addedFanLetter={addFanLetter}
            />}
        />
        <Route path="/member/:id" element={
          <Detail
            deleteLetter={deleteFanLetter}
            updateLetter={updateFanLetter}
            list={list}
          />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router






// export const StCommentBox = styled.section`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   width: 480px;
//   height: 60px;
//   margin-bottom: 15px;
// `
// export const StBox = styled.li`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 1100px;
//   height: 120px;
//   border: 1px solid black;
//   color: black;
//   border-radius: 5px;
//   padding: 10px;

//   &.innerBox {
//     display: flex;
//     flex-direction: column;
//     width: 480px;
//     min-height: 100px;
//     margin: 15px;

//   }
// `
// export const StP = styled.p`
//   width: 380px;
//   height: 20px;
//   padding: 5px;
//   margin-left: 70px;
//   border-radius: 5px;
//   background-color: palegreen;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   line-height: 1.4;

// `


// export const StImg = styled.figure`
//   width: 60px;
//   height: 60px;
//   margin-right: 25px;
//   border-radius: 50%;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 50%;
//   }
// `


// export const StProfile = styled.div`
//   display: flex;
//   height: 50px;
//   flex-direction: column;
//   justify-content: space-around;
// `


