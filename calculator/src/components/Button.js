import React from "react";
import { useDispatch } from "react-redux";
import actions from "../actions";
import '../button.css';



const Button = props =>{
    const dispatch = useDispatch();

    const checkInput = inp =>{

        if(inp === '='){
            return dispatch(actions.evaluate());
        }
        else{
            return dispatch(actions.insert(inp));
        }
    }

    return(
        // button onclick will update input state
        // if prop is '=' then update the state to evaluate expression
        <button onClick={() => {checkInput(props.value)}}>{props.value}</button>
        
    );
}

export default Button;