import { useContext } from "react"
import { TareasContext } from "../../context/TareasContext"
import { TaskCard } from "./TaskCard"
import "../../styles/Tasks.css";

export const TaskList = () => {
  const {tasks} = useContext(TareasContext)
  return (
    <div className="listaTareas">
      {
        tasks.map(task=>(
          <TaskCard task={task} key={task.id}></TaskCard>
        ))
      }
    </div>
  )
}
