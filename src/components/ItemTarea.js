import React from 'react';

const ItemTarea = (props) => {
    return (
        <li className="list-group-item text-center">{props.dato}</li>
    );
};

export default ItemTarea;