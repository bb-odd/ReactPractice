import React,{ useContext } from 'react';
import DeleteNote from './DeleteNote';
import './Note.css';
import { NoteContext } from '../contexts/NoteContext';


const Note = ({title, content, date, id}) =>{
    const [notes, setNotes] = useContext(NoteContext);

    const updateNoteText = e =>{
        const text=e.target.value;

        // create note object with updated text
        const newNote = {
            title: title,
            content: text,
            date: date
        }

        setNotes(new Map(notes).set(id,newNote));
    }

    const updateNoteTitle = e =>{
        const title=e.target.value;

        // create note object with updated title
        const newNote = {
            title: title,
            content: content,
            date: date
        }

        setNotes(new Map(notes).set(id,newNote));
    }

    return(
        <div className='note'>
            <div className='note-header'>
                <textarea
                    className='note-title'
                    rows='1'
                    cols='20'
                    placeholder='Write title here...'
                    onChange={updateNoteTitle}
                    value={title}
                ></textarea>
                <DeleteNote id={id}/>
            </div>
            <textarea 
            className='note-text-box'
            rows='8'
            cols='10'
            placeholder='Write text here...'
            onChange={updateNoteText}
            value={content}
            ></textarea>
            <div className='note-date'>{date}</div>
        </div>
    );
}

export default Note;