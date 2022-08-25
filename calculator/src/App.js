import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import View from './components/View';

function App() {
  return (
    <div className="App">
      <View />
      <Button value={7}/>
      <Button value={8}/>
      <Button value={9}/>
      <Button value={'+'}/>
      <Button value={'='}/>
    </div>
  );
}

export default App;
