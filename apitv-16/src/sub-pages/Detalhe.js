import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import useFetch from "../hooks/useFetch";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzgyYmRhY2FjYjkzYzAyM2M3Y2M3OTRmOTA2OWIwNiIsIm5iZiI6MTcyNjgzOTY0MS4xNjA2NTIsInN1YiI6IjY2ZTA0MzE2NWEyZDUwZDc4YzhhM2Q5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rv_zRsPMldj3LmVaOJk-6Aa0XgNjcKECkKZclxn9xjI`,
  },
};

const Detalhe = () => {
  const { id } = useParams();

  // Construir a URL dinamicamente com base no ID
  const url = `https://api.themoviedb.org/3/tv/${id}?language=pt-BR`;

  // Opções para o fetch com o token de autorização

  // Usar o hook useFetch para buscar os dados
  const { data, loading, error } = useFetch(url, options);

  // Renderização condicional
  if (loading)
    return (
      <div className="d-flex justify-content-center m-5 pt-3">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      {/* Renderizar os dados da API */}
      {data && (
        <div>
          <div className=" detailscontainer  py-5 mb-5">
            <div className="imgcontainer ">
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.name}
                className="img-fluid"
              />
            </div>
            <div className="itenscontainer  p-3">
              <img
                src={`https://image.tmdb.org/t/p/w500${data.networks[0].logo_path}`}
                alt={data.name}
                className="networklogo"
              />
              <h2 className="fw-bold">{data.name}</h2>
              <p className="fw-bold">Sinopse: {data.overview}</p>
              <p className="fw-bold">Data de estreia: {data.first_air_date}</p>
              <p className="fw-bold">
                Data do útimo episódio a ir ao ar: {data.last_air_date}
              </p>
              <p className="fw-bold">
                Último episódio a ir ao ar: {data.last_episode_to_air.name}
              </p>
              <p className="fw-bold">
                Número de temporadas: {data.number_of_seasons}
              </p>
              <p className="fw-bold">
                Número de episódios: {data.number_of_episodes}
              </p>
              <p className="fw-bold">
                Data do próximo episódio:{" "}
                {data.next_episode_to_air
                  ? data.next_episode_to_air.air_date
                  : "Nenhum próximo episódio"}
              </p>
              <p className="fw-bold">País de origem: {data.origin_country}</p>
              <p className="fw-bold">
                Língua de origem: {data.original_language}{" "}
              </p>
              <p className="fw-bold">Nome original: {data.original_name}</p>
              <p className="fw-bold">Status: {data.status}</p>
              <p className="fw-bold">Nota: {data.vote_average} </p>
              <p className="fw-bold">Número de votos: {data.vote_count} </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detalhe;
