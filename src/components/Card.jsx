import '../styles/Card.css'
import {useState} from 'react'

export const Card = ({imagen,titulo,descripcion,precio,agregar}) => {
  const [agregado, setAgregado] = useState(agregar)
  const clickAgregar = () => {
    setAgregado(true)
  }
  const clickQuitar = () => {
    setAgregado(false)
  }
  return (
    <div className='tarjeta'>
      <img className='tarjeta-imagen' src={imagen} alt='imagen' />
      <div className='tarjeta-contenido'>
        <h3 className='tarjeta-titulo'>{titulo}</h3>
        <p className='tarjeta-descripcion'>{descripcion}</p>
        <p className='tarjeta-precio'>$ {precio}</p>
        {
          agregado
          ? <button 
            className='boton-quitar'
            type='button'
            onClick={clickQuitar}
          >
            Quitar del carrito
          </button>
          : <button 
            className='boton-agregar'
            type='button'
            onClick={clickAgregar}
          >
            Agregar al carrito
          </button>
        }
      </div>
    </div>
  )
}
