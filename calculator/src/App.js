import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button value={7}/>
      <Button value={8}/>
      <Button value={9}/>
      <Button value={'+'}/>
      <Button value={'='}/>
    </div>
  );
}

export default App;
