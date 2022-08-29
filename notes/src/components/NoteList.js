import React, { useState, useContext} from 'react';
import Note from './Note';
import { NoteContext } from '../contexts/NoteContext';
import './NoteList.css';


const NoteList = ({searchText}) => {
    const [notes, setNotes] = useContext(NoteContext);

    function renderNotes(){

        //loops through pairs and renders notes using it
        console.log(Array.from(notes).filter(note => note[1].content.toLowerCase().includes("")));
        return Array.from(notes)
                .filter(note => note[1].content.toLowerCase().includes(searchText))
                .map(([key,value]) => (
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