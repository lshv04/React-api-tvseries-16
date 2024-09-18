import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Netflix from "./pages/Netflix";
import Primevideo from "./pages/Primevideo";
import Hbomax from "./pages/Hbomax";
import Appletv from "./pages/Appletv";

// Importar as sub-páginas
import Acaoeaventura from "./sub-pages/Acaoeaventura";
import Comedia from "./sub-pages/Comedia";
import Drama from "./sub-pages/Drama";
import Misterio from "./sub-pages/Misterio";
import Crime from "./sub-pages/Crime";
import Outros from "./sub-pages/Outros";
import NavbarMain from "./Components/Navbar";

function App() {
 
  return (

    <Router>
      
      <div>
      <NavbarMain/>
       
    

        {/* Rotas */}
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/netflix" element={<Netflix />}>
            <Route path="acaoeaventura" element={<Acaoeaventura networkCode= "213"/>} />
            <Route path="comedia" element={<Comedia />} />
            <Route path="drama" element={<Drama />} />
            <Route path="misterio" element={<Misterio />} />
            <Route path="crime" element={<Crime />} />
            <Route path="outros" element={<Outros />} />
          </Route>
          <Route path="/primevideo" element={<Primevideo />}>
            <Route path="acaoeaventura" element={<Acaoeaventura networkCode= "1024"/>} />
            <Route path="comedia" element={<Comedia />} />
            <Route path="drama" element={<Drama />} />
            <Route path="misterio" element={<Misterio />} />
            <Route path="crime" element={<Crime />} />
            <Route path="outros" element={<Outros />} />
          </Route>
          <Route path="/hbomax" element={<Hbomax />}>
            <Route path="acaoeaventura" element={<Acaoeaventura networkCode= "3186"/>} />
            <Route path="comedia" element={<Comedia />} />
            <Route path="drama" element={<Drama />} />
            <Route path="misterio" element={<Misterio />} />
            <Route path="crime" element={<Crime />} />
            <Route path="outros" element={<Outros />} />
          </Route>
          <Route path="/appletv" element={<Appletv />}>
            <Route path="acaoeaventura" element={<Acaoeaventura networkCode= "2552"/>} />
            <Route path="comedia" element={<Comedia />} />
            <Route path="drama" element={<Drama />} />
            <Route path="misterio" element={<Misterio />} />
            <Route path="crime" element={<Crime />} />
            <Route path="outros" element={<Outros />} />
          </Route>
   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
