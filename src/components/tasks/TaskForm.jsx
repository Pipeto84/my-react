import { useState } from "react";
import "../../styles/Tasks.css";

export const TaskForm = () => {
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  
  return (
    <form>
      <div className="formulario">
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label labelTitulo"
          >
            Crear tarea
          </label>
          <input
            type="text"
            className="form-control tareaTitulo"
            id="exampleInputEmail1"
            placeholder="Ingresa el nombre de la tarea..."
          />
        </div>
        <div className="mb-3">
          <textarea 
            className="form-control tareaDescripcion"
            placeholder="Ingresa la descripcion de la tarea...">
          </textarea>
        </div>
        <button type="submit" className="btn btn-primary tareaBotonCrear">
          Crear
        </button>
      </div>
    </form>
  );
};
