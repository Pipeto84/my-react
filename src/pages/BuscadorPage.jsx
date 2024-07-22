import {useState, useContext} from 'react'
import { Clima } from '../components/Clima'
import { Peliculas } from '../components/Peliculas'
import { ClimaContext } from '../context/ClimaContext'
import '../styles/Buscador.css'

export const BuscadorPage = () => {
  const [selector, setSelector] = useState('Buscador')
  const [dataInput, setDataInput] = useState('')
  const [enviado, setEnviado] = useState('')
  const {fetchClima,infoCity} = useContext(ClimaContext)

  const handleChanges = (e) => {
    setDataInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(dataInput)
    if (selector === 'Clima') {
      fetchClima(dataInput)
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
        return <Peliculas ></Peliculas>
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
    <div className='clima'>
      <h1 className='h1'>{titulo(selector)} </h1>
      <form onSubmit={handleSubmit} className='formulario , container'>
        <div className="input-group mb-3 , buscador" >
          <button 
            type="submit" 
            className="btn btn-outline-black ,"
            disabled={dataInput < 1}
          >Buscar</button>
          <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
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
          />
        </div>
      </form>
      {seleccionada()}
    </div>
  )
}
