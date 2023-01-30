import { useState } from 'react'

import Header from './components/header'
import Formulario from './components/formulario'
import ListadoTareas from './components/ListadoTareas'

function App() {

  const [ tareas, setTareas ] = useState([])

  return (
    <div className='container mx-auto mt-20'> {/* (mt-20) margin top */}

      <Header />
        <div className='mt-12 flex'>
          <formulario
            tareas = {tareas}
            setTareas = {setTareas}
            
          />

          <ListadoTareas 
            tareas = {tareas}
            setTareas = {setTareas}
          /> 
        </div>  
        
    </div>
  )
}

export default App
