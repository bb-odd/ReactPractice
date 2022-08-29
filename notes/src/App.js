import './App.css';
import { NoteProvider } from './contexts/NoteContext';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import React, { useState } from 'react';
import Search from './components/Search';

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <NoteProvider>
      <div className='header'>
        <div className='header-left'>
          <h1 className='title'>NOTES</h1>
          <Search setSearchText={setSearchText}/>
        </div>
        <AddNote />
      </div>
      <div className='notes-list'>
        <NoteList searchText={searchText}/>
      </div>
    </NoteProvider>
  );
}

export default App;
