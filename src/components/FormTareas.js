import React, { useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];

  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState(tareasLocalStorage);

  //aqui uso el ciclo de vida del componente.
  useEffect(() => {
    //esto funciona en montaje y actualización
    console.log('desde useEffect')
    localStorage.setItem('listaTareas', JSON.stringify(tareas));
  }, [tareas]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombre) => {
    let _tareas = tareas.filter((elemento) => elemento !== nombre);
    setTareas(_tareas);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container my-5">
        <div className="mb-3 d-flex">
          <input
            className="form-control mx-3"
            type="text"
            onChange={(event) => setTarea(event.target.value)}
            placeholder="Ingrese una tarea"
            value={tarea}
          ></input>
          <button className="btn btn-outline-primary text-center" type="submit">
            Agregar
          </button>
        </div>
      </form>

      <section className="container">
        <ListaTareas arrTareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
      </section>
    </>
  );
};

export default FormTareas;
