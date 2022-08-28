import React from 'react';
import './Note.css';

const Note = ({title, content, date, id}) =>{

    return(
        <div className='note'>
            <h3>{title}</h3>
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