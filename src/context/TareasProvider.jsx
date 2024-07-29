import { useEffect, useState } from 'react'
import { TareasContext } from './TareasContext'

export const TareasProvider = ({children}) => {
  const storageTasks = JSON.parse(localStorage.getItem('tareasReactPipeto84'))
  const storage = () => {
    if (storageTasks !== null) {
      return storageTasks
    } else {
      return []
    }
  }
  const [tasks, setTasks] = useState(storage())
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
    localStorage.setItem('tareasReactPipeto84', JSON.stringify(tasks))
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
