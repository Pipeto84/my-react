import { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import '../../styles/buscador/Peliculas.css'

export const Peliculas = () => {
  const urlImage = 'https://image.tmdb.org/t/p/w500'

  const {infoMovie} = useContext(MovieContext)
  console.log(Date())
  return (
    <div className="movieList">
      {
        infoMovie.map(movie => (
          <div key={movie.id} className="movieCard">
            <img src={`${urlImage}${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <h4>{movie.release_date}</h4>
            <p>{movie.overview}</p>
          </div>
        ))
      }
    </div>
  )
}
