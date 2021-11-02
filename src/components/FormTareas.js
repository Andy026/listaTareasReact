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
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container my-5">
        <div className="mb-3 d-flex">
          <input
            className="form-control"
            type="text"
            onChange={(event) => setTarea(event.target.value)}
            placeholder="Ingrese una tarea"
          ></input>
          <button className="btn btn-outline-primary text-center" type="submit">
            Agregar
          </button>
        </div>
      </form>

      <section className="container">
        <ListaTareas></ListaTareas>
      </section>
    </>
  );
};

export default FormTareas;
