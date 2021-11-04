import React from "react";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <ul className="list-group my-5">
        {
          props.arrTareas.map((elemento, indice) => <ItemTarea key={indice} dato={elemento}></ItemTarea>)
        }
    </ul>
  );
};

export default ListaTareas;
