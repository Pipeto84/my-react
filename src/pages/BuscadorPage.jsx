import {useState, useContext} from 'react'
import { Clima } from '../components/buscador/Clima'
import { Peliculas } from '../components/buscador/Peliculas'
import { ClimaContext } from '../context/ClimaContext'
import { MovieContext } from '../context/MovieContext'
import iconMovie from '../assets/movie.svg'
import iconWeather from '../assets/weather.svg'
import iconMovieColor from '../assets/movieColor.svg'
import iconCrispetas from '../assets/crispetas.svg'
import iconTermometro from '../assets/termometro.svg'
import iconWeatherColor from '../assets/weatherColor.svg'
import '../styles/buscador/Buscador.css'

export const BuscadorPage = () => {
  const [selector, setSelector] = useState('Buscador')
  const [dataInput, setDataInput] = useState('')
  const [enviado, setEnviado] = useState('')
  const [iconoTema, setIconoTema] = useState(false)
  const {fetchClima} = useContext(ClimaContext)
  const {fetchMovie} = useContext(MovieContext)

  const clima = () => {
    setSelector('Clima')
    setIconoTema(true)
    setEnviado('')
  }
  const peliculas = () => {
    setSelector('Peliculas')
    setIconoTema(true)
    setEnviado('')
  }
  const infoBuscar = <h4 className="textoEnBuscador">
    Busca el <a className='aClima' href='#' onClick={clima}>Clima </a> 
    actual de una ciudad o busca información de una 
    <a className='aPelicula' href='#' onClick={peliculas}> Película.</a>  
  </h4>
  const iconosBuscar = () => {
    if (selector === 'Buscador') {
      return (
        <>
          <a href="#" onClick={clima}>
          <img className="iconoClima1" src={iconWeatherColor} alt="icono clima" />
          </a>
          <a href="#" onClick={peliculas}>
          <img className="iconoPelicula1" src={iconMovieColor} alt="icono pelicula" />
          </a>
        </>
      )
    }
  }
  const handleChanges = (e) => {
    setDataInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(dataInput)
    setIconoTema(false)
    if (selector === 'Clima') {
      fetchClima(dataInput)
      setDataInput('')
    }else if(selector === 'Peliculas'){
      fetchMovie(dataInput)
      setDataInput('')
    }
  }
  const seleccionada = () =>{
    switch (selector) {
      case 'Buscador':
        return infoBuscar
      case 'Clima':
        if (enviado.length > 0) {
          return <Clima ></Clima>
        }else {
          return
        }
      case 'Peliculas':
        if (enviado.length > 0) {
          return <Peliculas ></Peliculas>
        }else {
          return
        }
      default:
        return
    }
  }
  const handlePlaceHolder = () => {
    switch (selector) {
      case 'Buscador':
        return 'Selecciona un tema...'
      case 'Clima':
        return 'Ingresa una ciudad...'
      case 'Peliculas':
        return 'Ingresa nombre de película...'
      default:
        return ''
    }
  }
  const titulo = (selector) => {
    if(selector === "Clima") {
      return "Clima"
    }else if (selector === "Peliculas") {
      return "Películas"
    }else {
      return "Buscador"
    }
  } 
  const iconosInfoTema = () => {
    if (selector === 'Clima' && iconoTema) {
      return (
        <>
          <h4 className="textoTema">Busca el clima actual de una ciudad</h4>
          <img className="iconoClima1" src={iconWeatherColor} alt="icono clima" />
          <img className="iconoClima2" src={iconTermometro} alt="icono clima" />
        </>
      )
    } else if (selector === 'Peliculas' && iconoTema) {
      return (
        <>
          <h4 className="textoTema">Busca información sobre una película</h4>
          <img className="iconoPelicula1" src={iconMovieColor} alt="icono pelicula" />
          <img className="iconoPelicula2" src={iconCrispetas} alt="icono pelicula" />
        </>
      )
    }
  }
  return (
    <div className='buscar'>
      {/* <h1 className='titulo'>{titulo(selector)} </h1> */}
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 buscador" >
          <button 
            type="submit" 
            className="btn btn-outline-dark ,"
            disabled={dataInput < 1}
          >Buscar</button>
          <button type="button" className="btn btn-outline-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          <ul className="dropdown-menu listaTemas" >
            <li><a onClick={clima} className="dropdown-item" >Clima</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a onClick={peliculas} className="dropdown-item" >Peliculas</a></li>
          </ul>
          <input 
            type="text" 
            className="form-control , entrada" 
            value={dataInput}
            onChange={handleChanges}
            placeholder={handlePlaceHolder()}
            disabled={selector === 'Buscador'}
            id='inputBuscar'
            autoComplete='on'
            autoFocus
          />
        </div>
      </form>
      {seleccionada()}
      {iconosBuscar()}
      {iconosInfoTema()}
    </div>
  )
}
