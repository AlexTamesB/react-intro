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
      <p>
        Hello {nombre}
      </p>
    </div>
  );
}


function App() {
  const logotipo = logo;
  const mostrarImagen = true;
  const contador = 10;

  // Si el contador es menor a 5, imprimir un mensaje:
  // "El contador es menor a 5"
  // Si el contador es mayor a 5, imprimir:
  // "El contador es mayor a 5"

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

        <div>
          
          {mostrarImagen ? (
            <img src={logotipo} className="App-logo" alt="logo" />
          ) : (
            'No hay imagen para mostrar'
          )}
        </div>

        <div>
        
          {contador < 5
            ? 'El contador es menor a 5'
            : 'El contador es mayor a 5'}
        </div>

        <HelloWorld />
      </div>
    </>
  );
}

export default App;