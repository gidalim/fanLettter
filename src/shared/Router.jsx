import { Route, Routes, BrowserRouter } from "react-router-dom"
import Giselle from "../pages/Giselle";
import Karina from "../pages/Karina";
import Ningning from "../pages/Ningning";
import Winter from "../pages/Winter";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Karina />} />
        <Route path="GISELLE" element={<Giselle />} />
        <Route path="WINTER" element={<Winter />} />
        <Route path="NINGNING" element={<Ningning />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router