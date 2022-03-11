import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

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
        <Card title="Card 2" purple>X</Card>
        <Card title="Card 3" blue>Z</Card>
        <Card title="Card 4" green>X</Card>  
      </div>
    </div>
  );
}

export default App;
