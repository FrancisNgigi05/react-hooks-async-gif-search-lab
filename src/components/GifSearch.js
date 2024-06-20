import React from 'react'

function GifSearch( { giphSearch, setGiphSearch } ) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setGiphSearch(giphSearch);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Search...' value={giphSearch} onChange={(e) => setGiphSearch(e.target.value)}/>
      <input type="submit" value='Find Giphs' />
    </form>
  )
}

export default GifSearch;
