import React from 'react';
import './Note.css';

const Note = ({title, content, date, id}) =>{

    return(
        <div className='note'>
            <h1>{title}</h1>
            <a>{content}</a>
        </div>
    );
}

export default Note;