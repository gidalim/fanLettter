import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { UserDataProvide } from "../context/UserDataContext";






const Router = () => {

  return (
    <UserDataProvide>
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<Home />}
          />
          <Route path="/detail/:id" element={<Detail />}
          />
        </Routes>
      </BrowserRouter>
    </UserDataProvide>
  )
}

export default Router


