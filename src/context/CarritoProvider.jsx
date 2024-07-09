import {useReducer, useState} from 'react'
import { CarritoContext } from './CarritoContext'

export const CarritoProvider = ({children}) => {

  const initialLista = []

  const listaReducer = (state=initialLista, action={}) => {
    switch (action.type) {
      case '[COMPRAS] Agregar Producto':
        return [...state, action.payload]
      case '[COMPRAS] Eliminar Producto':
        break
      case '[COMPRAS] Aumentar Cantidad Producto':
        break
      case '[COMPRAS] Disminuir Cantidad Producto':
        break
      default:
        return state;
    }
  }

  const [listaCompras, dispatch] = useReducer(listaReducer, initialLista)

  const agregarProducto = (compra) => {
    const action = {
      type: '[COMPRAS] Agregar Producto',
      payload : compra
    }
    dispatch(action)
  }
  const eliminarProducto = (id) => {
    const action = {
      type: '[COMPRAS] Eliminar Producto',
      payload : id
    }
    dispatch(action)
  }
  const aumentarProducto = (id) => {
    const action = {
      type: '[COMPRAS] Aumentar Cantidad Producto',
      payload : id
    }
    dispatch(action)
  }
  const disminuirProducto = (id) => {
    const action = {
      type: '[COMPRAS] Disminuir Cantidad Producto',
      payload : id
    }
    dispatch(action)
  }

  return (
    <CarritoContext.Provider 
      value={{
        listaCompras,
        agregarProducto,
        eliminarProducto,
        aumentarProducto,
        disminuirProducto
      }}>
      {children}
    </CarritoContext.Provider>
  )
}
