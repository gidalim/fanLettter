import { Route, Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react";
import data from './data.json'
import Member from "../pages/Member";
import Detail from "../pages/Detail";




const Router = () => {

  const [fanLetters, setFanLetters] = useState(data);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="member/*" element={<Member />} />

        <Route path="/member/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

