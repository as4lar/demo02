import React from "react"
import Alumno from "./Alumno"
//lista de alumnos
const Listaalumnos=()=>{
    return(
        <>
        <h1>Lista de alumnos</h1>
            <Alumno nombre="Andrea" matricula="190452"/>
            <Alumno nombre="Mario" matricula="190451"/>
            <Alumno nombre="Luis" matricula="190450"/>
        </>
    );
};
export default Listaalumnos;