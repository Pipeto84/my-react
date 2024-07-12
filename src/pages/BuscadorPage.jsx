import {useState, useEffect, useContext} from 'react'
import '../styles/Buscador.css'
import { Clima } from '../components/Clima'
import { Peliculas } from '../components/Peliculas'
import { ClimaContext } from '../context/ClimaContext'

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
        break
    }
  }
  const clima = () => {
    setSelector('Clima')
  }
  const peliculas = () => {
    setSelector('Peliculas')
  }
  
  return (
    <div className='clima'>
      <h1 className='h1'>{selector}</h1>
      <form onSubmit={handleSubmit} className='formulario , container'>
        <div className="input-group mb-3 , buscador" >
          <button 
              type="submit" 
              className="btn btn-outline-secondary ,"
              // onClick={buscar}
            >Buscar</button>
            <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li><a onClick={clima} className="dropdown-item" href="#">Clima</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a onClick={peliculas} className="dropdown-item" href="#">Peliculas</a></li>
            </ul>
              <input 
                type="text" 
                className="form-control , entrada" 
                value={dataInput}
                onChange={handleChanges}
                placeholder=''
              />
        </div>
      </form>
      {seleccionada()}
    </div>
  )
}
