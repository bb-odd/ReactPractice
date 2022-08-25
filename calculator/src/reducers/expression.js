import {evaluate} from "mathjs"

const expressionReducer = (state = '', action) => {
    switch(action.type){
        case "INSERT":
            return state + action.payload;
        case "EVALUATE":
            return evaluate(state);
        case "DELETE":
            return '';
        default:
            return state;
    }
}

export default expressionReducer;