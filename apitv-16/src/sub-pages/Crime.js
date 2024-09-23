import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { format } from 'date-fns';
import { Pagination } from 'react-bootstrap'; 
import Spinner from "react-bootstrap/Spinner";
import { Link } from 'react-router-dom';

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzgyYmRhY2FjYjkzYzAyM2M3Y2M3OTRmOTA2OWIwNiIsIm5iZiI6MTcyNjU5MjIyNy44NDE2Miwic3ViIjoiNjZlMDQzMTY1YTJkNTBkNzhjOGEzZDkxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.FOjXHa7t4f5C_d2gr367z6XyaM47nQW84s6MCgxRssU",
  },
};

function Crime({ networkCode }) {

  // Função para determinar a plataforma com base no networkCode
  function getPlatformByNetworkCode(networkCode) {
    let platform = 'teste';
  
    if (networkCode === 213) {
      platform = 'netflix';
    } else if (networkCode === 1024) {
      platform = 'primevideo';
    } else if (networkCode === 3186) {
      platform = 'hbomax';
    } else if (networkCode === 2552) {
      platform = 'appletv';
    }
  
    return platform;
  }
  
  const platform = getPlatformByNetworkCode(Number(networkCode)); // Garante que networkCode seja um número
  
  console.log(`network code: ${networkCode}, platform: ${platform}`);
  

  const [page, setPage] = useState(1);

  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=${page}&sort_by=popularity.desc&with_genres=80&with_networks=${networkCode}`,
    options
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading)
    return (
      <div className="d-flex justify-content-center m-5 pt-3">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="container">
        <div className="row">
          {data.results.map((item) => {
            // Verifica se a data está definida e é válida
            const isValidDate = item.first_air_date && !isNaN(new Date(item.first_air_date).getTime());
            const formattedDate = isValidDate ? format(new Date(item.first_air_date), 'dd/MM/yyyy') : 'Data inválida';

            return (
              <div className="col-12 col-md-4 mb-4" key={item.id}>
                <div className="card h-100 shadow border-0">
                  <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="img-fixed-size" alt={item.name} />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-truncate-multiline">{item.overview}</p>
                    </div>
                    <div>
                      <p className="card-text mt-3">Lançamento: {formattedDate}</p>
                      <div className='notaedetalhes'>
                      <p className="card-text mt-3 rating">Nota: {item.vote_average}</p>
                   
                
                      <Link to={`/${platform}/crime/${item.id}`} className='detalhes'>Detalhes </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Adiciona o componente de paginação e centraliza */}
        <div className="d-flex justify-content-center my-4">
          <Pagination>
            {[...Array(10).keys()].map((number) => (
              <Pagination.Item key={number + 1} active={number + 1 === page} onClick={() => handlePageChange(number + 1)}>
                {number + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default Crime;
