import logo from './logo.svg';
import './App.css';
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

const entrada = ['a', 'b', 'c']

const menuGithub = [];

const opcionesMenu = [{

  id: 1, texto: 'Inicio', link: '/', isSelected: true
}, {
  id: 2, texto: 'Tssuess', link: '/productos', isSelected: false
}, {
  id: 3, texto: 'Pull-recuests', link: '/Pulls', isSelected: false
}];


function App() {

  const parrafos = entrada.map(elemento => {
    return (
      <div>
        <p>{elemento}</p>
      </div>
    );
  });
  
  
  //mostrar todos los elementos de; menu
  //agregar id, poner el link como href
  //si esta selecionado, poner un *
  
  const menu = opcionesMenu.map(elemento => {
    return (
      <p>
        {elemento.texto}
{ elemento.isSelected ? (<b>*</b>):''}
      </p>
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
      </div>
    </>
  );
}

export default App;