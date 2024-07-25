import  ShoppingCartIcon  from '@mui/icons-material/ShoppingCart'
import { Badge } from '@mui/material'
import { NavLink } from 'react-router-dom'
import {useContext} from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const NavBar = () => {
  const {listaCompras} = useContext(CarritoContext)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink to='/buscador' className="navbar-brand" >React Pipeto</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className="nav-link" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/compras' className="nav-link" >Compras</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/buscador' className="nav-link" >Buscador</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to='/carrito'>
          <Badge badgeContent={listaCompras.length} color='error'>
            <ShoppingCartIcon color='info' />
          </Badge>
        </NavLink>
      </div>
    </nav>
  )
}