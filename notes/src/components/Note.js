import React,{ useState } from 'react';
import DeleteNote from './DeleteNote';
import './Note.css';


const Note = ({title, content, date, id}) =>{

    return(
        <div className='note'>
            <div>
                <h3>{id}</h3>
                <DeleteNote id={id}/>
            </div>
            <textarea 
            className='note-text-box'
            rows='8'
            cols='10'
            placeholder='Write text here...'
            ></textarea>
            <div className='note-date'>{date}</div>
        </div>
    );
}

export default Note;