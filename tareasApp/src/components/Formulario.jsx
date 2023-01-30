import { useState } from "react"; /* como ya viene de react solo hay q importarlo */

const Formulario = (tareas, setTareas) => {
    /* por cada uno de estos input se necesita pasarles 2 cosas: 
    1) el value (el valor de la variable q va a tomar ese hook)
    2) el evento onChange, que va a estar escuchando ese cambio (lo q ingrese el usuario, lo q tipea)
        para eso se usa el onChange*/

    const [ nombre, setNombre ] = useState ('') /* guarda la variable del hook */
    const [ puesto, setPuesto ] = useState ('') /* Lo ponemos vacio porque por cada uno de estos hook es un input */
    const [ fecha, setFecha ] = useState ('')
    const [ descripcion, setDescripcion ] = useState ('')

    /* este hook lo usamos para notificar al usuario de que existe un campo vacio
    lo inicializamos en false pq no hay ningun campo completo tdv */
    /* Si hay campos completos lo tiene q cambiar a true */
    const [ error, setError ] = useState (false)

    const generarId = () => {
        const random  = math.random().toString(36).sbstring(2)    //funcion para generar ID
        const fecha = Date.now().toString(36)

        return random + fecha
    }
    

    const handleSubmit = (e) =>  /* handleSubmit se se usa para especificar el método que debe de ejecutarse cuando el formulario es guardado */
    { 

    e.preventDefault()  /* siempre que se usa el  handleSubmit , es conveniente usar el  preventDefault*/
    
    /* validacion del formulario (campos obligatorios). verificar si hay al menos un campo vacio */
    if ([nombre, puesto,fecha,descripcion].includes ('')){
        console.log('hay al menos un campo vacio')
        setError (true)

        console.log(ObjetoTareas)

    } else {/* si los campos estan completos.. */
        setError(false)


        /* Objeto tareas */
         const ObjetoTareas = {
            nombre,
            puesto,
            fecha,
            descripcion,
            id: generarId() // esto es una funcion
        }

        setTareas([...tareas, ObjetoTareas])

        // reiniciar el formulario
        setNombre('')
        setPuesto('')
        setFecha('')
        setDescripcion('')
    }

    console.log ('Enviando formulario')

    }//aca cierra el handlesubmit

    return(
        <div classname = 'w-1/2  lg:w-2/5'>{/* mt maximo with, el lg toma el 40% */}
        <h2 className="font-black text-3xl text-center"> seguimiento de tareas </h2>
        

        <p className="text-lg mt-5 text-center " >
            añade tareas y {""}
            <span className="text-indigo-600 font-bold">Administralas </span>

        </p>

        <form 
        onSubmit = {handleSubmit}
        className="bg-white shadow-md rounded-lg py-10  "> 
            {/* esto es un ternario, es como un condicional, los : significa "sino" */}
            {error && 
                <div className="bg-red-800 text-white text-center p-3-uppercase font-bold mb-3 rounded" >
                    <p> Si hay un error</p>
                </div>
                
            }

            <div className="mb-5">{/* clase para el nombre (1ER INPUT) */}
                <label htmlFor="Nombre" >Nombre del dev</label> {/*htmlfor da accesibilidad al componente */}

            <input id = 'Nombre' className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="text" 
            placeholder="Nombre del desarrollador"

            value={nombre} /* aca le pasamos el value, en este caso 
            el valor de la variable q toma este hook es el nombre, porque estamos en la parte "Nombre del dev" */
            onChange = {(e) => setNombre (e.target.value)} /*le pasamos una funcion. en este caso la funcion q ya declaramos mas arriba (setNombre) */
            /* tambien le pasamos el argumento e.targuet.value que es una propiedad que escucha el 
            input del elemento.targuet y va a disparar/controlar ese input dentro del html  */

            />
            </div>

            <div className="mb-5">{/* clase para el puesto (2DO INPUT)*/}
                <label htmlFor="Puesto" >Puesto del dev</label> {/*htmlfor da accesibilidad al componente */}
            
            <input id = 'Puesto' className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="text" 
            placeholder="Puesto del desarrollador"

            value={puesto} /* aca le pasamos el value, en este caso 
            el valor de la variable q toma este hook es el PUESTO, porque estamos en la parte "PUESTO del dev" */
            onChange = {(e) => setPuesto(e.target.value)} /*le pasamos una funcion. en este caso la funcion q ya declaramos mas arriba (setPuesto) */
            /* tambien le pasamos el argumento e.targuet.value que es una propiedad que escucha el 
            input del elemento.targuet y va a disparar/controlar ese input dentro del html  */


            />
            </div>


            <div className="mb-5">{/* clase para el fecha (3ER INPUT) */}
                <label htmlFor="alta" >Alta</label> {/*htmlfor da accesibilidad al componente */}
        
            <input 
            id = 'alta' 
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="date" 

            value={fecha} /* aca le pasamos el value, en este caso 
            el valor de la variable q toma este hook es la FECHA, porque estamos en la parte "alta/ fecha" */
            onChange = {(e) => setFecha(e.target.value)} /*le pasamos una funcion. en este caso la funcion q ya declaramos mas arriba (setFecha) */
            /* tambien le pasamos el argumento e.targuet.value que es una propiedad que escucha el 
            input del elemento.targuet y va a disparar/controlar ese input dentro del html  */


            />
            </div>

            <div className="mb-5">{/* clase para el detalle (4to INPUT) */}
                <label htmlFor="detalle" >Descripcion de la tarea</label> {/*htmlfor da accesibilidad al componente */}
        
            <textarea  /* se autoajusta */
            id= "detalle" 
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md "
            placeholder="describe la tarea" /* es lo que se ve como gris clarito */

            value={descripcion} /* aca le pasamos el value, en este caso 
            el valor de la variable q toma este hook es la DESCRIPCION, porque estamos en la parte "DESCRIPCION del dev" */
            onChange = {(e) => setDescripcion(e.target.value)} /*le pasamos una funcion. en este caso la funcion q ya declaramos mas arriba (setDescripcion) */
            /* tambien le pasamos el argumento e.targuet.value que es una propiedad que escucha el 
            input del elemento.targuet y va a disparar/controlar ese input dentro del html  */



            />
            </div>

            <input 
            type="submit" 
            className="
            bg-indigo-600 
            w-full 
            p-3 
            text white
            uppercase
            font-bold
            hover:bg-indigo-700 cursor-pointer transitions-color"
            />
            
        </form>

        </div>
    );
}

export default Formulario; 