import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Card title="Card 1" red>X</Card>
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
