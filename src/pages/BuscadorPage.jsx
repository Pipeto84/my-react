import {useState, useContext} from 'react'
import { Clima } from '../components/Clima'
import { Peliculas } from '../components/Peliculas'
import { ClimaContext } from '../context/ClimaContext'
import { MovieContext } from '../context/MovieContext'
import '../styles/Buscador.css'

export const BuscadorPage = () => {
  const [selector, setSelector] = useState('Buscador')
  const [dataInput, setDataInput] = useState('')
  const [enviado, setEnviado] = useState('')
  const {fetchClima} = useContext(ClimaContext)
  const {fetchMovie} = useContext(MovieContext)

  const handleChanges = (e) => {
    setDataInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(dataInput)
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
  const clima = () => {
    setSelector('Clima')
  }
  const peliculas = () => {
    setSelector('Peliculas')
  }
  const handlePlaceHolder = () => {
    switch (selector) {
      case 'Buscador':
        return 'Selecciona el tema de búsqueda'
      case 'Clima':
        return 'Ingresa una ciudad...'
      case 'Peliculas':
        return 'Ingresa en nombre de una película...'
      default:
        return ''
    }
  }
  const titulo = (selector) => {
    if(selector === "Clima") {
      return "Clima actual"
    }else if (selector === "Peliculas") {
      return "Información de películas"
    }else {
      return "Buscador informativo"
    }

  } 
  return (
    <div className='buscar'>
      <h1 className='titulo'>{titulo(selector)} </h1>
      <form onSubmit={handleSubmit} className='formulario , contenedor-buscar'>
        <div className="input-group mb-3 , buscador" >
          <button 
            type="submit" 
            className="btn btn-outline-dark ,"
            disabled={dataInput < 1}
          >Buscar</button>
          <button type="button" className="btn btn-outline-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu" >
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
            autoFocus
          />
        </div>
      </form>
      {seleccionada()}
    </div>
  )
}
