import {useContext} from 'react'
import { ProductoContext } from '../context/ProductosContext'
import { Card } from '../components/Card'
import '../styles/Compras.css'

export const Compras = () => {
  const {productos} = useContext(ProductoContext)
  return (
    <div className="contenedor-compras">
      <h1 className='tituloProductos'>Productos</h1>
      <hr/>
      <div className="contenedor-productos">
        {
          productos.map(producto => (
            <Card 
              key={producto.id}
              producto={producto}
            ></Card>
          ))
        }
      </div>
    </div>
  )
}
