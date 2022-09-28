import React from 'react';
import ReactDOM from 'react-dom/client';

//<> fragments: para guardar muchas cosas, vienen siendo objetos
//funciones de tipo flecha 
const root = ReactDOM.createRoot(document.getElementById('root'));
const name='Andrea'
const jsx= <h1>Hola Mundo {name}</h1>
const session=true;
const alumnos=["Andrea", "Aldo", "Abraham"]
const jsx2=<>
<h1 className='titulo ' style={{color: 'red'}}>Hola Mundo {name}</h1>
<p className='comentarios' style={{color: 'blue'}}>Comentarios</p>
</>;
const jsx3=(
<>
  {session==true ?(
    <>
    <h1 className='titulo ' style={{color: 'red'}}>Hola Mundo {name}</h1>
    <p className='comentarios' style={{color: 'blue'}}>Comentarios</p>
    </>
    ):(
      <h2>No has iniciado sesion</h2>
    )}
  </>
);
const jsx4=(
  <>
    {session==true ?(
      <>
      <h1 className='titulo ' style={{color: 'red'}}>Hola Mundo {name}</h1>
      <p className='comentarios' style={{color: 'blue'}}>Comentarios</p>
      <h3>Lista de alumnos</h3>
      <ul>
          {alumnos.map((nombre, i)=>{
            return <li key={i}>{nombre}</li>
          })}
      </ul>
      </>
      ):(
        <h2>No has iniciado sesion</h2>
      )}
    </>
  );
root.render(jsx4)
//funcion de tipo flecha, entre parentesis van los parametros, entre corchetes lo que necesitamos
/*
const compruebaSesion=(session)=>{
  if(session==true){
    return jsx2;
  }
  else{
    return <h2>No has iniciado sesion</h2>
  }
}
root.render(compruebaSesion(session)); */

