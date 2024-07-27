import { useContext } from "react"
import { TareasContext } from "../../context/TareasContext"


export const TaskCard = ({task}) => {
  const {eliminarTarea} = useContext(TareasContext)
  return (
    <div className="contenedorTareas">
      <h3 className="titulo">{task.titulo}</h3>
      <p className="descripcion">{task.descripcion}</p>
      <button 
        className="btn btn-danger botonEliminarTarea"
        onClick={()=>eliminarTarea(task.id)}
      >Eliminar</button>
    </div>
  )
}
