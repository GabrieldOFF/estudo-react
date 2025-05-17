import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import './App.css';

function App() {

  const nome = "Gabriel";

  return (
    <div className="App">
      <h1>Minha aplicação</h1>
      <HelloWorld/>
      <SayMyName nome={nome}/>
      <Pessoa
        nome="Gabriel"
        idade="20"
        foto="https://placehold.co/150"
        profissao="Programador"/>
    </div>
  );
}

export default App;