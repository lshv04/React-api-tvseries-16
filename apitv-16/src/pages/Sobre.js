import React from 'react'
import Sopranos from '../img/sopranos.jpg';
import Sticker from '../Components/Sticker';

const Sobre = () => {
  return (
    <div >
    <div className='backimagesobre  container-fluid ' style={{ backgroundImage: `url(${Sopranos})` }}> 

        <div className='container sobre'>
          <div>
          <p>Esse projeto foi desenvolvido por Leandro Hosken utilizando API do site :</p>

          <div className='imgtmdb'>
          <a href="https://developer.themoviedb.org/docs/getting-started" target="_blank" rel="noopener noreferrer">
        <img 
          src="/logotmdb.svg" 
          alt="Logo TMDB" 
    
        />
      </a>
    </div>
    </div>

         <Sticker/>
        </div>


    </div>

   
   
  </div>
  )
}

export default Sobre