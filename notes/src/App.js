import './App.css';
import Note from './components/Note';
import { NoteProvider } from './contexts/NoteContext';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import React, { useContext } from 'react';
import { NoteContext } from './contexts/NoteContext';

function App() {

  return (
    <NoteProvider>
      <div className="App">
        <NoteList />
        <AddNote />
      </div>
    </NoteProvider>
  );
}

export default App;
