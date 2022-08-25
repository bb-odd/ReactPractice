import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import View from './components/View';
import Clear from './components/Clear';

function App() {
  return (
    <div className="App">
      <View />
      <div className='row'>
        <Button value={7}/>
        <Button value={8}/>
        <Button value={9}/>
        <Button value={'+'}/>
      </div>
      <div className='row'>
        <Button value={4}/>
        <Button value={5}/>
        <Button value={6}/>
        <Button value={'-'}/>
      </div>
      <div className='row'>
        <Button value={1}/>
        <Button value={2}/>
        <Button value={3}/>
        <Button value={'/'}/>
      </div>
      <div className='row'>
        <Button value={0}/>
        <Button value={'.'}/>
        <Button value={'='}/>
        <Button value={'*'}/>
      </div>
      <Clear />
    </div>
  );
}

export default App;
