import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const { 
    listaCompras,
    eliminarProducto,
    aumentarProducto,
    disminuirProducto
  } = useContext(CarritoContext);
  // console.log(listaCompras)

  const handlePrint = () => print()

  const handleTotal = () => {
    return listaCompras.reduce((total, item)=>
      total + (item.price * item.cantidad),0).toFixed(2)
  }

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map(compra => (
            <tr key={compra.id}>
              <td scope="row">{compra.title}</td>
              <td>${compra.price}</td>
              <td>
                <button 
                  className="btn btn-ouline"
                  type="button"
                  onClick={()=>disminuirProducto(compra.id)}
                >-</button>
                <button className="btn btn-primary" >{compra.cantidad}</button>
                <button 
                  className="btn btn-ouline"
                  type="button"
                  onClick={()=>aumentarProducto(compra.id)}
                >+</button>
              </td>
              <td>
                <button 
                  className="btn btn-danger"
                  type="button"
                  onClick={()=>eliminarProducto(compra.id)}
                >Eliminar</button>
              </td>
            </tr>           
          ))}
          <tr>
            <td></td>
            <th>Total: </th>
            <th>$ {handleTotal()}</th>
            <td></td>
          </tr>
        </tbody>
      </table>
        <div className="d-grid gap-2">
        <button 
          className="btn btn-primary"
          type="button"
          onClick={handlePrint}
          disabled={listaCompras < 1}
        >Compra</button>
      </div>
    </>
  );
};
