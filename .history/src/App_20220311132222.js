import './App.css';
import React, {useState} from 'react';
import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Media from './components/Media';


function App() {
  const [min, setMin] = useState(100)
  const [max, setMax] = useState(1000)

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo title="Card 1" red>X</Intervalo>
      </div>
      <div className='linha'>
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>
    </div>
  );
}

export default App;
