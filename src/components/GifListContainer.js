import React, { useEffect, useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [giphs, setGiphs] = useState([]);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [giphSearch, setGiphSearch] = useState("dogs");

  const fetchGiphs = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${giphSearch}&api_key=5GAGsjGXyiBNajo2a9Lpi8jWJqoiREkU&limit=3&rating=g`)
      .then((r) => {
        if (!r.ok) {
          if (r.status === 429) {
            throw new Error("Too Many Requests");
          }
          throw new Error("Failed to fetch");
        }
        return r.json();
      })
      .then((data) => {
        setGiphs(data.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        if (err.message === "Too Many Requests" && retryCount < 3) {
          setTimeout(() => {
            setRetryCount(retryCount + 1);
            fetchGiphs();
          }, 3000); // Retry after 3 seconds
        }
      });
  };

  // Fetching the data to be stored
  useEffect(() => {
    fetchGiphs();
  }, [giphSearch]);

  
  return (
    <div>
      {error ? <p>Error: {error}</p> : null}
      <GifSearch giphSearch={giphSearch} setGiphSearch={setGiphSearch}/>
      <GifList giphs={giphs}/>
    </div>
  );
}

export default GifListContainer;
