import React from 'react';

const ItemTarea = (props) => {
    return (
        <li className="my-2 border border-dark rounded list-group-item d-flex justify-content-between">{props.dato} <button className="btn btn-danger rounded-pill border border-dark" onClick={() => {props.borrarTarea(props.dato)}}>Borrar</button></li>
    );
};

export default ItemTarea;