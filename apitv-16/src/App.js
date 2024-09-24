import React from "react";
import { HashRouter  as Router, Route, Routes, Navigate} from "react-router-dom";
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
import Fantasiaescifi from "./sub-pages/Fantasiaescifi";
import NavbarMain from "./Components/Navbar";
import Footer from "./Components/Footer";
import Detalhe from "./sub-pages/Detalhe";


function App() {
 
  return (

    <Router>
      
      <div>
      <NavbarMain/>
       
    

        {/* Rotas */}
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detalhe/>} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/netflix" element={<Netflix />}>
            <Route path="acaoeaventura" element={<Acaoeaventura networkCode= "213"/>} />
            <Route path="/netflix/acaoeaventura/:id" element={<Detalhe/>} />
            <Route path="comedia" element={<Comedia networkCode= "213"/>} />
            <Route path="/netflix/comedia/:id" element={<Detalhe/>} />
            <Route path="drama" element={<Drama networkCode= "213" />} />
            <Route path="/netflix/drama/:id" element={<Detalhe/>} />
            <Route path="misterio" element={<Misterio networkCode= "213"/>} />
            <Route path="/netflix/misterio/:id" element={<Detalhe/>} />
            <Route path="crime" element={<Crime networkCode= "213"/>} />
            <Route path="/netflix/crime/:id" element={<Detalhe/>} />
            <Route path="Fantasiaescifi" element={<Fantasiaescifi networkCode= "213"/>} />
            <Route path="/netflix/fantasiaescifi/:id" element={<Detalhe/>} />
            <Route index element={<Navigate to="acaoeaventura" />} />
          </Route>
          <Route path="/primevideo" element={<Primevideo />}>
            <Route path="acaoeaventura" element={<Acaoeaventura networkCode= "1024"/>} />
            <Route path="/primevideo/acaoeaventura/:id" element={<Detalhe/>} />
            <Route path="comedia" element={<Comedia networkCode= "1024"/>} />
            <Route path="/primevideo/comedia/:id" element={<Detalhe/>} />
            <Route path="drama" element={<Drama networkCode= "1024"/>} />
            <Route path="/primevideo/drama/:id" element={<Detalhe/>} />
            <Route path="misterio" element={<Misterio networkCode= "1024"/>} />
            <Route path="/primevideo/misterio/:id" element={<Detalhe/>} />
            <Route path="crime" element={<Crime networkCode= "1024"/>} />
            <Route path="/primevideo/crime/:id" element={<Detalhe/>} />
            <Route path="Fantasiaescifi" element={<Fantasiaescifi networkCode= "1024"/>} />
            <Route path="/primevideo/fantasiaescifi/:id" element={<Detalhe/>} />
            <Route index element={<Navigate to="acaoeaventura" />} />
          </Route>
          <Route path="/hbomax" element={<Hbomax />}>
            <Route path="acaoeaventura" element={<Acaoeaventura networkCode= "3186"/>} />
            <Route path="/hbomax/acaoeaventura/:id" element={<Detalhe/>} />
            <Route path="comedia" element={<Comedia networkCode= "3186"/>} />
            <Route path="/hbomax/comedia/:id" element={<Detalhe/>} />
            <Route path="drama" element={<Drama networkCode= "3186"/>} />
            <Route path="/hbomax/drama/:id" element={<Detalhe/>} />
            <Route path="misterio" element={<Misterio networkCode= "3186"/>} />
            <Route path="/hbomax/misterio/:id" element={<Detalhe/>} />
            <Route path="crime" element={<Crime networkCode= "3186"/>} />
            <Route path="/hbomax/crime/:id" element={<Detalhe/>} />
            <Route path="Fantasiaescifi" element={<Fantasiaescifi networkCode= "3186"/>} />
            <Route path="/hbomax/Fantasiaescifi/:id" element={<Detalhe/>} />
            <Route index element={<Navigate to="acaoeaventura" />} />
          </Route>
          <Route path="/appletv" element={<Appletv />}>
          <Route path="acaoeaventura/" element={<Acaoeaventura networkCode="2552" />} />
          <Route path="/appletv/acaoeaventura/:id" element={<Detalhe/>} />
            <Route path="comedia" element={<Comedia networkCode= "2552"/>} />
            <Route path="/appletv/comedia/:id" element={<Detalhe/>} />
            <Route path="drama" element={<Drama networkCode= "2552"/>} />
            <Route path="/appletv/drama/:id" element={<Detalhe/>} />
            <Route path="misterio" element={<Misterio networkCode= "2552"/>} />
            <Route path="/appletv/misterio/:id" element={<Detalhe/>} />
            <Route path="crime" element={<Crime networkCode= "2552"/>} />
            <Route path="/appletv/crime/:id" element={<Detalhe/>} />
            <Route path="Fantasiaescifi" element={<Fantasiaescifi networkCode= "2552"/>} />
            <Route path="/appletv/fantasiaescifi/:id" element={<Detalhe/>} />
            <Route index element={<Navigate to="acaoeaventura" />} />
          </Route>
   
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
