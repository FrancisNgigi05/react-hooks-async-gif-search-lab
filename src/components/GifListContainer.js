import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("cows");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=5pJEGyeqsRWHZkCu5Us41hutYUw2tQom&limit=7`
    )
      .then((r) => r.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
      });
  }, [query]);



     return(
         <div style={{ display: "flex" }}>
             <GifList gifs={gifs} />
             <GifSearch onSubmit={setQuery} />
            
         </div>
     )
}

export default GifListContainer;
