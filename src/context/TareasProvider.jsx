import { useContext, useState } from 'react'
import { TareasContext } from './TareasContext'

export const TareasProvider = ({children}) => {
  const [tasks, setTasks] = useState([])
  const crearTarea = (task) => {
    
    setTasks([...tasks,{
      titulo: task.titulo,
      descripcion: task.descripcion
    }])
  }
  return (
    <TareasContext.Provider value={{
      tasks,
      crearTarea,
    }}>
      {children}
    </TareasContext.Provider>
  )
}
