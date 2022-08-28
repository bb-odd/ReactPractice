import './App.css';
import Note from './components/Note';
import { NoteProvider } from './contexts/NoteContext';
import NoteList from './components/NoteList';

function App() {
  return (
    <NoteProvider>
      <div className="App">
        {console.log("hello")}
        <NoteList />
      </div>
    </NoteProvider>
  );
}

export default App;
