import React from 'react';
import '../estilos/tareas.css'

function Tarea({ texto }) {
  return (
    <div className="tarea-contenedor">
      <div className="tarea-texto">
        {texto}
      </div>
      <div className="tarea-icono">
        Eliminar
      </div>
    </div>
  );
}

export default Tarea;