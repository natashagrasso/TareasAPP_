/* en este componente se van a listar todas las tareas */
/* para eso se tiene que llamar al componente "tarea" */

import Tarea from "./Tarea";
//como son props se pasan entre llaves
const ListadoTareas = ( {tareas} ) => {

    return(
        <div className="w-1/2 lg:w-3/5">
            <h2 className="text-xl mt-5 mb-10 text-center" > Listado de tareas </h2>
        {   
            tareas.map( tarea  => (
                <Tarea
                /* recibimos la prop de tareas */
                    key={tarea.id}
                    tareas = {tareas}
                />
            ))
        } 
        </div>
    );

}

export default ListadoTareas; 