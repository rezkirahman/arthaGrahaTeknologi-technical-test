import {React, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [movie, setMovie] = useState([])
  const [search, setSearch] = useState('')

  const Fetch = async () => {
    return await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2fccde01a371b106b09a241d6d1d5b49').then((response => setMovie(response.data.results)))
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredMovie = movie?.filter((item) => {
    return item.original_title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  })

  useEffect(() => {
    try {
      Fetch()
    }
    catch (err) {
      console.log(err);
    }
  }, [])
  console.log(movie);
  console.log(search.toLocaleLowerCase());

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <input type="text" placeholder='Search' onChange={handleSearch} style={{ height: 32, width: 400, borderRadius: 8 }} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredMovie?.map((data, i) => (
          <div key={i} style={{ boxShadow: '0 4px 8px 0', width: 320, margin: 8, borderRadius: 12 }}>
            <img src={`https://image.tmdb.org/t/p/w500/` + data.poster_path} alt="" width={320} style={{
              borderRadius: '12px 12px 0 0'
            }} />
            <div>
              <h3>{data.original_title}</h3>
              <p>{data.overview}</p>
              <h4>{data.vote_count} min</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
