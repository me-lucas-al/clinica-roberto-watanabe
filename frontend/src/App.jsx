import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home"
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Perfil from "./pages/Perfil/Perfil.jsx";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={2000} position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
''