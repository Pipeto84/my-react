import { useState, useContext } from "react";
import { TareasContext } from "../../context/TareasContext";
import "../../styles/tareas/Tasks.css";

export const TaskForm = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { crearTarea } = useContext(TareasContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    crearTarea({
      titulo,
      descripcion,
    });
    setTitulo("");
    setDescripcion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formulario">
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label labelTitulo"
          >Crear tarea</label>
          <input
            type="text"
            className="form-control tareaTitulo"
            id="exampleInputEmail1"
            placeholder="Nombre de la tarea..."
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo}
            autoFocus
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control tareaDescripcion"
            placeholder="Descripcion de la tarea..."
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
            disabled={titulo.length < 1}
            ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn btn-primary tareaBotonCrear"
          disabled={titulo.length < 1}
        >Crear</button>
      </div>
    </form>
  );
};
