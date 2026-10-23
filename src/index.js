import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router";
import {Cadastro} from "./pages/cadastro/cadastro";
import {Login} from "./pages/login/login";
import { Senha } from './pages/senha-esquecida/senha';
import {AuthProvider} from "./context/auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route index element={<App />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/esqueci-a-senha" element={<Senha />}/>
          </Routes>
        </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
