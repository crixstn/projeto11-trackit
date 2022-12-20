import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"
import CadastrePage from "./pages/CadastrePage/CadastrePage"
import HabitsPage from "./pages/HabitsPage/HabitsPage";

import { useState, useEffect } from "react";
import UserContext from "./contexts/UserContext";
import AuthContext from "./contexts/AuthContext";

export default function App() {
  const [userDatas, setUserDatas] = useState("")
  const [token, setToken] = useState("")

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("trackit"));
    setUserDatas(datas);
  },[]);

  return (
    <AuthContext.Provider value={{token, setToken}}>
      <UserContext.Provider value={{userDatas, setUserDatas}}>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/cadastro" element={<CadastrePage/>}/>
            <Route path="/habitos" element={<HabitsPage/>}/>
            </Routes>
        </BrowserRouter>
      </UserContext.Provider>
   </AuthContext.Provider>
  );
}


