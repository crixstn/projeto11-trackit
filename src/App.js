import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"
import CadastrePage from "./pages/CadastrePage/CadastrePage"
import { useState } from "react";

export default function App() {

  const [token, setToken] = useState("")

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken}/>}/>
        <Route path="/cadastro" element={<CadastrePage/>}/>
      </Routes>

    </BrowserRouter>
  );
}


