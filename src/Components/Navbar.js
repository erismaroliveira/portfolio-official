import React from 'react';
import avatar from '../img/perfil.jpeg';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sobre-mim" exact activeClassName="active">
              Sobre Mim
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projetos" exact activeClassName="active">
              Projetos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contato" exact activeClassName="active">
              Contato
            </NavLink>
          </li>
        </ul>
      
        <footer className="footer">
          <p>
            ©2021 - Erismar Oliveira
          </p>
        </footer>
      </nav>
    </div>
  )
}

export default Navbar;
