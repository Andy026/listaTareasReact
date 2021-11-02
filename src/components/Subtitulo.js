import React from 'react';
//se autocompleta con rsc (react stateless component)
const Subtitulo = (props) => {
    return (
        <h2 className="text-center">
            Tareas de la comisión {props.comision}
        </h2>
    );
};

export default Subtitulo;