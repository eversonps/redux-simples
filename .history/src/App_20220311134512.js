import './App.css';
import React from 'react';

import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Media from './components/Media';


function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo>X</Intervalo>
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
