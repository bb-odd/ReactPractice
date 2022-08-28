import React, { useState, createContext } from 'react';
import Note from '../components/Note';

export const NoteContext = createContext();

// provides information of each note to different components
export const NoteProvider = props =>{
    const [notes, setNotes] = useState(new Map());

    // renders all child components wrapped in the context
    return(
        <NoteContext.Provider value={[notes,setNotes]}>
            {props.children}
        </NoteContext.Provider>
    );
}