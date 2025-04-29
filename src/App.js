import logo from './logo.svg';
import './App.css';
//#1 los componestes son funciones que retornan HTML
//#2 receordar los parentesis  
//#3 clases de css van con className
//#4 referencias Js van dentro de llaves{}
//# 5 esas llaves sustituyen el v-=bind o las {{}} de vue
  
function HelloWorld() {
const nombre ='Alexander Tames';
return (
  <div>
<h1> Hello {nombre}</h1>
     </div>
);
}

function App() {    

const logotipo = logo;
const nombre = "Hello World";
  return (

    <div className="App">
      <header className="App-header">
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
    </div>
  );
  
}

export default App;
