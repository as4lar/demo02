import React from "react"
const TituloRojo=(props) => {
    console.log(props)
    return (
        <h1 className="titulo" style={{color: "red"}}> Hola {props.name}</h1>
    );
};

const TituloVerde=({name}) => {
    return (
        <h1 className="titulo" style={{color: "green"}}> Hola {name}</h1>
    );
};

export {TituloRojo, TituloVerde};