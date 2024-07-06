import './styles/App.css'
import {NavBar} from './components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {Compras} from './pages/ComprasPage'
import {CarritoPage} from './pages/CarritoPage'

export const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/compras' element={<Compras></Compras>}></Route>
        <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
        <Route path='/*' element={<Navigate to='/' />}></Route>
      </Routes>
    </>
  )
}

