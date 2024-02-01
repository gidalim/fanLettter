import { Route, Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react";
import data from './data.json';
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { UserDataContext } from "../context/UserDataContext";
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
    <UserDataContext.Provider value={{
      list,
      addFanLetter,
      deleteFanLetter,
      updateFanLetter
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="member/*"
            element={
              <Home />
            }
          />
          <Route path="/member/:id" element={
            <Detail />
          }
          />
        </Routes>
      </BrowserRouter>
    </UserDataContext.Provider>
  )
}

export default Router


