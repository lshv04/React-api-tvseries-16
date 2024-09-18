import React from 'react';
import useFetch from '../hooks/useFetch';
import { format } from 'date-fns';




const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzgyYmRhY2FjYjkzYzAyM2M3Y2M3OTRmOTA2OWIwNiIsIm5iZiI6MTcyNjU5MjIyNy44NDE2Miwic3ViIjoiNjZlMDQzMTY1YTJkNTBkNzhjOGEzZDkxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.FOjXHa7t4f5C_d2gr367z6XyaM47nQW84s6MCgxRssU",
  },
};



function Acaoeaventura(networkCode) {
  console.log(networkCode)
  
  const networkCodeValue = networkCode.networkCode; // networkCode é um objeto, selecionei o primeiro item.

 console.log(`numericCode= ${networkCodeValue}`);


  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=10759&with_networks=${networkCodeValue}`,
    options
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Popular TV Shows</h1>
      <div className="container">
      <h1 className="my-4 text-center">Ação e Aventura</h1>
      <div className="row">
        {data.results.map((item) => (
          <div className="col-12 col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow border-0">
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="img-fixed-size" alt={item.name} />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-truncate-multiline">{item.overview}</p>
                
                </div>
                <div>
                <p className="card-text mt-3">Primeiro episódio: {format(new Date(item.first_air_date), 'dd/MM/yyyy')}</p>
                <p className="card-text mt-3 rating ">Nota: {item.vote_average}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}

export default Acaoeaventura;
