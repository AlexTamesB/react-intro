import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//#1 los componestes son funciones que retornan HTML
//#2 receordar los parentesis  
//#3 clases de css van con className
//#4 referencias Js van dentro de llaves{}
//# 5 esas llaves sustituyen el v-=bind o las {{}} de vue

function HelloWorld() {
  const nombre = 'Alexander Tames';
  return (
    <div className="app app-header">
      <div>
        <h1>Hola Alex Tames</h1>
      </div>
    </div>
  );
}
const menuGithub = [];

const entrada = ['a', 'b', 'c'];

const opcionesMenu = [{
  id: 1, texto: 'Inicio', link: '/', isSelected: false
},
{
  id: 2, texto: 'Tssuess', link: '/productos', isSelected: true
},
{
  id: 3, texto: 'Pull-recuests', link: '/Pulls', isSelected: false
}];


function App() {
const [elementoActivo, setElementoActivo] = useState('hola')

  const actualizarSeleccion = (id = null) =>
    {console.log('click en el elemento', id);

      setElementoActivo(id);
   };

  //mostrar todos los elementos de; menu
  //agregar id, poner el link como href
  //si esta selecionado, poner un *

  const menu = opcionesMenu.map(elemento => {
    return (
      <a
      href={`#${elemento.link}`}
      key={elemento.id} 
      style={{margin: '10px' }} 
      onClick={actualizarSeleccion.bind(this, elemento.id)}>
        { elemento.texto }
        { elemento.id === elementoActivo && (<b>*</b>)}
      </a>
    );
  });


  const parrafos = entrada.map(elemento => {
    return (
      <div>
        <p>{elemento}</p>
      </div>
    );
  });


  const logotipo = logo;
  const mostrarImagen = true;


  // Si el contador es menor a 5, imprimir un mensaje:
  // "El contador es menor a 5"
  // Si el contador es mayor a 5, imprimir:
  // "El contador es mayor a 5"
  const contador = 4;


  return (
    <>
      <div className="App">
        <header className="App-header">
          {mostrarImagen && <span>Hola</span>}
          <img src={logotipo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <HelloWorld />
        <div>

          {mostrarImagen ? (
            <img src={logotipo} className="App-logo" alt="logo" />
          ) : (
            'No hay imagen para mostrar'
          )}
        </div>

        <div>

          {contador < 5
            ? 'El contador es menor a 5' : 'El contador es mayor a 5'}
        </div>
        <h2>
          Estos son los elementos</h2>
        {parrafos}

        <h1>Estos son los elementos del menu</h1>

        {menu}

        <h1>Este es el elemento seleccionado</h1>
        {elementoActivo}
      </div> 
    </>
  );
}

export default App;