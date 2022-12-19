import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"
import CadastrePage from "./pages/CadastrePage/CadastrePage"
import HabitsPage from "./pages/HabitsPage/HabitsPage";

import { useState, useEffect } from "react";
import UserContext from "./components/UserContext";

export default function App() {
  const [userDatas, setUserDatas] = useState("")

  return (
    <BrowserRouter>
      <UserContext.Provider value={{userDatas, setUserDatas}}>

        <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<CadastrePage/>}/>
        <Route path="/habitos" element={<HabitsPage/>}/>
        </Routes>

        </UserContext.Provider>
    </BrowserRouter>
  );
}


