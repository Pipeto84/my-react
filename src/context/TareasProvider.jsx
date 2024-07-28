import { useEffect, useState } from 'react'
import { TareasContext } from './TareasContext'

export const TareasProvider = ({children}) => {
  const storageTasks = JSON.parse(localStorage.getItem('tareas'))
  const [tasks, setTasks] = useState(storageTasks)
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
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tasks))
  }, [tasks])
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
