import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Inicio from "./pages/Inicio";
import Ventas from "./pages/Ventas";
import Notificaciones from "./pages/Notificaciones";
import Login from "./pages/Login";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para manejar la autenticación

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} /> // Muestra la página de login si no está autenticado
      ) : (
        <div className="dashboard">
          <Sidebar />
          <div className="main-content">
            <header className="header">
              <button className="logout-button" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </header>
            <div className="content">
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/ventas" element={<Ventas />} />
                <Route path="/notificaciones" element={<Notificaciones />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
