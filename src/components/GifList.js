import React from "react";

function GifList({gifs}) {
    const gif = gifs.map((gif) => {
        return (
            <li key={gif.url}>
                <img src={gif.url} alt="gif" />
            </li>
        )
    })

    return(
        <div>
            <ul>
                {gif}
            </ul>
        </div>
    )
}

export default GifList;