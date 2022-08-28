import React, { useState, createContext } from 'react';
import Note from '../components/Note';

export const NoteContext = createContext();

// provides information of each note to different components
export const NoteProvider = props =>{
    const [notes, setNotes] = useState([
        {
            title: 'New Note 1',
            content: 'texty text',
            date: '24/08/2022',
            id: 1234
        },
        {
            title: 'New Note 2',
            content: 'texty text',
            date: '28/08/2022',
            id: 1235
        }
    ]);

    // renders all child components wrapped in the context
    return(
        <NoteContext.Provider value={[notes,setNotes]}>
            {props.children}
        </NoteContext.Provider>
    );
}