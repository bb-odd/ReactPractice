import { divide } from 'mathjs';
import React from 'react';
import { useSelector } from 'react-redux';

const View = () =>{
    const expression = useSelector(state => state);
    console.log(expression);

    return(
        <div className="view">{expression}</div>
    );
}

export default View;