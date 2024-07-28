import { useContext } from "react"
import { TareasContext } from "../../context/TareasContext"
import "../../styles/tareas/Tasks.css";

export const TaskCard = ({task}) => {
  const {eliminarTarea} = useContext(TareasContext)
  return (
    <div className="contenedorTarea">
      <h3 className="tituloTarea">{task.titulo}</h3>
      <p className="descripcionTarea">{task.descripcion}</p>
      <button 
        className="btn btn-danger botonEliminarTarea"
        onClick={()=>eliminarTarea(task.id)}
      >Eliminar</button>
    </div>
  )
}
