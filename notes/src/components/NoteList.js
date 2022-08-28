import React, { useState, useContext} from 'react';
import Note from './Note';
import { NoteContext } from '../contexts/NoteContext';


const NoteList = () => {
    const [notes, setNotes] = useContext(NoteContext);

    return(
        <div>
            {notes.map(note => (
                <Note title={note.title} content={note.content} date={note.date} id={note.id}/>
            ))}
        </div>
    );
}

export default NoteList;