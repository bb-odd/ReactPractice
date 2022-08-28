import React, {useState, useContext} from 'react';
import { NoteContext } from '../contexts/NoteContext';
import { nanoid } from 'nanoid';

const AddNote = () =>{
    const [notes, setNotes] = useContext(NoteContext);

    const addNote = () =>{
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        const newNote = {
            title: '',
            content: '',
            date: dd + '/' + mm + '/' + yyyy
        }

        setNotes({...notes, 1: newNote});
    }

    return(
        <button onClick={addNote}>Create New Note</button>
    );
}

export default AddNote;
