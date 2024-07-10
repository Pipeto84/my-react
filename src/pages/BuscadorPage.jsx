import {useState} from 'react'
import '../styles/Buscador.css'

export const BuscadorPage = () => {
  const [selector, setSelector] = useState('Buscador')
  const clima = () => {
    setSelector('Clima')
  }
  const peliculas = () => {
    setSelector('Peliculas')
  }
  return (
    <>
      <h1 className='h1'>{selector}</h1>
      <div className="input-group mb-3 , buscador" >
        <button type="button" className="btn btn-outline-secondary ,">Buscar</button>
        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li><a onClick={clima} className="dropdown-item" href="#">Clima</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a onClick={peliculas} className="dropdown-item" href="#">Peliculas</a></li>
        </ul>
        <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
      </div>
    </>
  )
}
