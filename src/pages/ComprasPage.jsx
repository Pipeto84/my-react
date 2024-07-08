import {useContext} from 'react'
import { ProductoContext } from '../context/ProductosContext'
import { Card } from '../components/Card'

export const Compras = () => {
  const {productos} = useContext(ProductoContext)
  return (
    <>
      <h1>Productos</h1>
      <hr/>
      {
        productos.map(producto => (
          <Card key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            agregar={producto.agregar}
          ></Card>
        ))
      }
    </>
  )
}
