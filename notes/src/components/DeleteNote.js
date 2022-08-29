import React, { useContext } from 'react';
import { NoteContext } from '../contexts/NoteContext';

const DeleteNote = ({id}) =>{
    const [notes, setNotes] = useContext(NoteContext);


    const deleteNote = () =>{
        const newNotes = new Map(notes);
        newNotes.delete(id);
        setNotes(newNotes);
    }

    return(
        <button onClick={deleteNote}>x</button>
    );
}

export default DeleteNote;