import { useContext, useState } from 'react'
import { TareasContext } from './TareasContext'

export const TareasProvider = ({children}) => {
  const [tasks, setTasks] = useState([])
  const id = new Date().getTime()
  const crearTarea = (task) => {
    
    setTasks([...tasks,{
      id: id,
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
