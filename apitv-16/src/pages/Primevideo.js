import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Primevideo = () => {
  return (
    <div>
      <h1>Prime Video</h1>
      <nav>
        <ul>
          <li><Link to="acaoeaventura">Ação e Aventura</Link></li>
          <li><Link to="comedia">Comédia</Link></li>
          <li><Link to="drama">Drama</Link></li>
          <li><Link to="misterio">Mistério</Link></li>
          <li><Link to="crime">Crime</Link></li>
          <li><Link to="outros">Outros</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Primevideo;