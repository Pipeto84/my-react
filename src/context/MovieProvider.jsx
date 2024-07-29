import { useState } from 'react'
import { MovieContext } from './MovieContext'

export const MovieProvider = ({children}) => {
  const urlBase ='https://api.themoviedb.org/3/search/movie?'
  const API_KEY="d6bd2332172452f8a7ef7c9b84b03443"

  const [infoMovie, setInfoMovie] = useState([])

  const fetchMovie = async (movie) => {
    try {
      const response = await fetch(`${urlBase}query=${movie}&api_key=${API_KEY}`)
      const data = await response.json()
      setInfoMovie(data.results)
    } catch (error) {
      console.error('el error en las peliculas es: ', error)
    }
  }
  return (
    <MovieContext.Provider value={{fetchMovie, infoMovie}}>
      {children}
    </MovieContext.Provider>
  )
}
