import './App.css';
import React, {useState} from 'react';
import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Media from './components/Media';


function App() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(1)

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo title="Card 1" red>X</Intervalo>
      </div>
      <div className='linha'>
        <Media min={1} max={10}></Media>
        <Soma min={1} max={10}></Soma>
        <Sorteio min={1} max={10}></Sorteio>
      </div>
    </div>
  );
}

export default App;