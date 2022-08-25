import React from "react";



const Button = props =>{

    return(
        // button onclick will update input state
        // if prop is '=' then update the state to evaluate expression
        <button>{props.value}</button>
    );
}

export default Button;