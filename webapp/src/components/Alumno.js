import React from "react"
import {TituloRojo, TituloVerde} from "./Titulo"
const alumnos=["Andrea", "Aldo", "Abraham"]
/*
const Alumno =({nombre,matricula}) => {
    return(
      <>
      <TituloRojo name="Yoli"/>
      <TituloVerde name="Yoli2"/>
        <p className='comentarios' style={{color: 'blue'}}>Comentarios</p>
        <h3>Lista de alumnos</h3>
        <ul>
            {alumnos.map((nombre, i)=>{
              return <li key={i}>{nombre}</li>
            })}
        </ul>
      
      </>
    ) ;
  };
  */
  const Alumno =({nombre,matricula}) => {
    return(
      <>
      <ul>
      <h1 className="titulo" style={{color: "blue"}}>-Nombre:{nombre} con matricula: {matricula}</h1>  
      </ul>    
      </>
    ) ;
  };
  
  export default Alumno;