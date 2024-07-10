import {NavBar} from './components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {Compras} from './pages/ComprasPage'
import {CarritoPage} from './pages/CarritoPage'
import { ProductosProvider } from './context/ProductosProvider'
import { CarritoProvider } from './context/CarritoProvider'

export const App = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/compras' element={<Compras></Compras>}></Route>
            <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  )
}
