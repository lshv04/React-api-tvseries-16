import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { format } from 'date-fns';
import { Pagination } from 'react-bootstrap'; 
import Spinner from "react-bootstrap/Spinner";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzgyYmRhY2FjYjkzYzAyM2M3Y2M3OTRmOTA2OWIwNiIsIm5iZiI6MTcyNjY4MTQ0OC4zODg0MTcsInN1YiI6IjY2ZTA0MzE2NWEyZDUwZDc4YzhhM2Q5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xmi9u_jsuPYtpdMYK_I_iEJdMP7PTqEt9T8pkR2oSQA",
  },
};

function TextInput() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
  };

  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/search/tv?query=${submittedValue}&include_adult=false&language=pt-BR&page=${page}`,
    options
  );

  return (
    <div>
      <div className="container">
      

        {/* Input e botão de submit */}
        <div className="inputcontainer">
        <form onSubmit={handleSubmit} className="mb-4 formcontainer">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Procure suas séries..."
            className="form-control "
          />
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </div>


        {/* Exibe carregando ou erro */}
        {loading && (
          <div className="d-flex justify-content-center m-5 pt-3">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
        {error && <p>Error: {error}</p>}

        <div className="row">
          {data && data.results.map((item) => {
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
                      <p className="card-text mt-3">Primeiro episódio: {formattedDate}</p>
                      <p className="card-text mt-3 rating">Nota: {item.vote_average}</p>
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

export default TextInput;
