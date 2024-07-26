import { NavBar } from './components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'
import { BuscadorPage } from './pages/BuscadorPage'
import { TasksPage } from './pages/TasksPage'
import { ProductosProvider } from './context/ProductosProvider'
import { CarritoProvider } from './context/CarritoProvider'
import { ClimaProvider } from './context/ClimaProvider'
import { MovieProvider } from './context/MovieProvider'

export const App = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <ClimaProvider>
          <MovieProvider>
            <NavBar></NavBar>
            <div>
              <Routes>
                <Route path='/' element={<HomePage></HomePage>}></Route>
                <Route path='/tareas' element={<TasksPage></TasksPage>}></Route>
                <Route path='/compras' element={<ComprasPage></ComprasPage>}></Route>
                <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
                <Route path='/buscador' element={<BuscadorPage></BuscadorPage>}></Route>
                <Route path='/*' element={<Navigate to='/' />}></Route>
              </Routes>
            </div>
          </MovieProvider>
        </ClimaProvider>
      </CarritoProvider>
    </ProductosProvider>
  )
}
