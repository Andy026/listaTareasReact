import React from 'react';

const FormTareas = () => {
    return (
        <>
            <form className="container my-5">
                <div className="mb-3 d-flex">
                    <input className="form-control" type="text" placeholder="Ingrese una tarea"></input>
                    <button className="btn btn-outline-primary text-center" type="submit">Agregar</button>
                </div>
            </form>
        </>
    );
};

export default FormTareas;