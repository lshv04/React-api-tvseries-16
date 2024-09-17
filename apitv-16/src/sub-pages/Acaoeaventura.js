import React from 'react';
import useFetch from '../hooks/useFetch';
import { Row, Col, Card } from "react-bootstrap"; // Importando os componentes necessários do React-Bootstrap

const Acaoeaventura = ({ networkCode }) => {
  // Converta networkCode para número
  const networkId = parseInt(networkCode, 10); // Base 10
  
  console.log('Network Code (numeral):', networkId);

  // Defina a URL com base no networkCode convertido
  const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=10759&with_networks=${networkId}`;
  
  // Defina as opções de fetch
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzgyYmRhY2FjYjkzYzAyM2M3Y2M3OTRmOTA2OWIwNiIsIm5iZiI6MTcyNjUwNDMxMC4yNTEyNDcsInN1YiI6IjY2ZTA0MzE2NWEyZDUwZDc4YzhhM2Q5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WENewFUhQMuBs4IPE9HyYjKRnSypO4ba9T4CN81AqHY',
    },
  };

  // Chame o hook useFetch de forma incondicional
  const { data, loading, error } = useFetch(url, options);
console.log(data)
  // Verifique o status de carregamento e erro
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Verifique a estrutura dos dados recebidos
  return (
    <div className="container">
      <h1 className="my-4 text-center">Ação e Aventura</h1>
      <Row>
        {data &&
          data.results &&
          data.results.map((show) => (
            <Col md={6} key={show.id} className="mb-4 d-inline-block">
              <Card className="h-100" style={{ maxHeight: "300px" }}>
                <Row className="g-0">
                  <Col md={4}>
                    <Card.Img
                      src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                      alt={show.name}
                      className="img-fluid"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{show.name}</Card.Title>
                      <Card.Text>
                        Data de estreia: {show.first_air_date}
                      </Card.Text>
                      <Card.Text className="text-truncate-multiline"
                        >Sinopse: {show.overview}</Card.Text>
                      <Card.Text>
                        Avaliação: {show.vote_average}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
      </Row>
      <style jsx>{`
        .text-truncate-multiline {
          display: -webkit-box;
          -webkit-line-clamp: 5; /* Limitar a 3 linhas */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>

  );
};

export default Acaoeaventura;
