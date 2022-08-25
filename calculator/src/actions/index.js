export const insert = num =>{

    return{
        type: 'INSERT',
        payload: num
    }
}

export const evaluate = () =>{

    return{
        type: 'EVALUATE'
    }
}

export const dlt = () =>{

    return{
        type: 'DELETE'
    }
}

export default{
    insert,
    evaluate,
    dlt
}