import React from "react";
import { useDispatch } from "react-redux";
import actions from "../actions";

const Clear = () =>{
    const dispatch = useDispatch();

    return(
        <button onClick={() => dispatch(actions.dlt())}>CLEAR</button>
        
    );
}

export default Clear;