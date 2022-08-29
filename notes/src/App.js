import './App.css';
import Note from './components/Note';
import { NoteProvider } from './contexts/NoteContext';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import React, { useState } from 'react';
import { NoteContext } from './contexts/NoteContext';
import Search from './components/Search';

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <NoteProvider>
      <div className="App">
        <Search setSearchText={setSearchText}/>
        <NoteList searchText={searchText}/>
        <AddNote />
      </div>
    </NoteProvider>
  );
}

export default App;
