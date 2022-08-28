import React, { useState, useContext} from 'react';
import Note from './Note';
import { NoteContext } from '../contexts/NoteContext';


const NoteList = () => {
    const [notes, setNotes] = useContext(NoteContext);

    function renderNotes(){
        const keys = Array.from(Object.keys(notes));
        // use keys to render each note from map
        return keys.map(key => (
                <Note title={notes[key].title} content={notes[key].content} date={notes[key].date} id={notes[key].id} />
                )) 
    }

    return(
        <div>
            {Object.keys(notes).length ? renderNotes() : null}
        </div>
    );
}

export default NoteList;