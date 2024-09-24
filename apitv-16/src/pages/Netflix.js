import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Netflix = () => {
  return (
    <div className="container networkpages">
      <img
        src={`${process.env.PUBLIC_URL}/Netflix_2015_logo.svg.png`}
        alt="Netflix TV logo"
        className="networklogo"
      />

      <nav>
        <ul className="nav2">
          <li>
            <NavLink
              to="acaoeaventura"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Ação e Aventura
            </NavLink>
          </li>
          <li>
            <NavLink
              to="comedia"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Comédia
            </NavLink>
          </li>
          <li>
            <NavLink
              to="drama"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Drama
            </NavLink>
          </li>
          <li>
            <NavLink
              to="misterio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Mistério
            </NavLink>
          </li>
          <li>
            <NavLink
              to="crime"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Crime
            </NavLink>
          </li>
          <li>
            <NavLink
              to="fantasiaescifi"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Fantasia e Sci-fi
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Netflix;
