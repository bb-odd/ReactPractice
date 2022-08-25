import { divide } from 'mathjs';
import React from 'react';
import { useSelector } from 'react-redux';
import '../view.css';

const View = () =>{
    const expression = useSelector(state => state);

    return(
        <div className="view">{expression}</div>
    );
}

export default View;