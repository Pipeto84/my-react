import { useState } from 'react'
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
  const eliminarTarea = (id) => {
    setTasks(tasks.filter(task=>task.id !== id))
  }
  return (
    <TareasContext.Provider value={{
      tasks,
      crearTarea,
      eliminarTarea
    }}>
      {children}
    </TareasContext.Provider>
  )
}
