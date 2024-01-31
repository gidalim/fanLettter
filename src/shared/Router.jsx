import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import Member from "../pages/Member";
import Main from "../component/Main";




const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Member" element={<Member />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router



// <Route path="KARINA" element={<Karina />} />
// <Route path="GISELLE" element={<Giselle />} />
// <Route path="WINTER" element={<Winter />} />
// <Route path="NINGNING" element={<Ningning />} />