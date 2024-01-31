import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import Member from "../pages/Member";
import Detail from "../pages/Detail";




const Router = () => {
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

