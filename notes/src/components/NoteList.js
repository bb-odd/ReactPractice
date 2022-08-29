import React, { useState, useContext} from 'react';
import Note from './Note';
import { NoteContext } from '../contexts/NoteContext';
import './NoteList.css';


const NoteList = () => {
    const [notes, setNotes] = useContext(NoteContext);

    function renderNotes(){

        //loops through pairs and renders notes using it
        return Array.from(notes).map(([key,value]) => (
                <Note title={value.title} content={value.content} date={value.date} id={key} />
                )) 
    }

    return(
        <div className='note-list'>
            {notes.size ? renderNotes() : null}
        </div>
    );
}

export default NoteList;