import React from 'react'

function GifList( {giphs} ) {
//   {giphs.map((giph) => (
//         <img key={giph.id} src={giph.images.fixed_height.url} alt={giph.title} />
//       ))}

    const giphsDisplayed = giphs.map((giph) => {
        return (
            <li>
                <img key={giph.id} src={giph.images.fixed_height.url} alt={giph.title} />
            </li>
        )
    })

    return (
        <ul>
            {giphsDisplayed}
        </ul>
    )
}

export default GifList
