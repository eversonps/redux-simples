import './App.css';

import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Media from './components/Media';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo title="Card 1" red>X</Intervalo>
      </div>
      <div className='linha'>
        <Media green></Media>
        <Soma blue></Soma>
        <Sorteio purple></Sorteio>
      </div>
    </div>
  );
}

export default App;
