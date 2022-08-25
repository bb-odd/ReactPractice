import {electronMassDependencies, evaluate} from "mathjs"

const expressionReducer = (state = '', action) => {
    switch(action.type){
        case "INSERT":
            return `${state}`+`${action.payload}`;
            
        case "EVALUATE":
            try{
                return evaluate(state);
            }
            catch(err){
                if(err instanceof SyntaxError){
                    return '';
                }else{
                    return evaluate(state);
                }
                
            }
        case "DELETE":
            return '';
        default:
            return state;
    }
}

export default expressionReducer;