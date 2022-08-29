import React, { useState, useContext} from 'react';
import Note from './Note';
import { NoteContext } from '../contexts/NoteContext';
import './NoteList.css';


const NoteList = ({searchText}) => {
    const [notes, setNotes] = useContext(NoteContext);

    function renderNotes(){

        // loops through pairs and renders notes using it
        // filters notes not containing text from search bar
        return Array.from(notes)
                .filter(note => note[1].content.toLowerCase().includes(searchText.toLowerCase()) || note[1].title.toLowerCase().includes(searchText.toLowerCase()))
                .map(([key,value]) => (
                <Note title={value.title} content={value.content} date={value.date} id={key} />
                )) 
    }

    return(
        <div className='notes'>
            {notes.size ? renderNotes() : null}
        </div>
    );
}

export default NoteList;