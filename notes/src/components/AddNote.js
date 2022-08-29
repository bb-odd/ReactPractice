import React, {useState, useContext} from 'react';
import { NoteContext } from '../contexts/NoteContext';
import { MdCreate } from 'react-icons/md';
import './AddNote.css';

const AddNote = () =>{
    const [notes, setNotes] = useContext(NoteContext);
    const [id, setId] = useState(0);

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

        setNotes(new Map(notes).set(id,newNote));
        setId(id+1);
    }

    return(
        <div className='note-button-container'>
            <button className='note-button' onClick={addNote}><MdCreate size='1.3rem'/></button>
        </div>        
    );
}

export default AddNote;
