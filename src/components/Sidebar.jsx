import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Administrador</h3>
      </div>
      <ul className="menu">
        <li>
          <Link to="/" className="menu-item">
            <span className="icon">🏠</span> Inicio
          </Link>
        </li>
        <li>
          <Link to="/ventas" className="menu-item">
            <span className="icon">🛒</span> Ventas
          </Link>
        </li>
        <li>
          <Link to="/notificaciones" className="menu-item">
            <span className="icon">🔔</span> Notificaciones
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
