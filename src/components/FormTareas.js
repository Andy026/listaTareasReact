import React, { useState } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  //const guardarTarea = (event) => {
  //    setTarea(event.target.value);
  //}

  const handleSubmit = (event) => {
    event.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea('');
  };

  const borrarTarea = (nombre) => {
    let _tareas = tareas.filter(elemento => elemento !== nombre);
    setTareas(_tareas)
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
