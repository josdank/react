import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tareas';
import '../estilos/listaTareas.css';
import '../estilos/tareas.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function ListaTareas() {
    const [tareas, setTareas] = useState([])
    const agregarTarea = tarea => {
        //console.log("Tarea agregada");
        //console.log(tarea);
        if (tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }
    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !==id);
        setTareas(tareasActualizadas);
    }
    const completarTarea = id=> {
        const tareasActualizadas = tareas.map(tarea =>{
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return (
        <>
            <TareaFormulario onSubmit = {agregarTarea}/>
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key = {tarea.id} //key no se pasa como un prop
                            id = {tarea.id}  // por eso es ncesario el id
                            texto={tarea.texto}
                            completada = {tarea.completada} />
                    )
                }
            </div>
        </>
    );
}

export default ListaTareas;
