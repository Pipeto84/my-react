import {useContext} from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {
  const {listaCompras} = useContext(CarritoContext)
  console.log(listaCompras)
  return (
    <div>CarritoPage</div>
  )
}
