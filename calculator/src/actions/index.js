const insert = num =>{
    return{
        type: 'INSERT',
        payload: num
    }
}

const evaluate = () =>{
    return{
        type: 'EVALUATE'
    }
}

const dlt = () =>{
    return{
        type: 'DELETE'
    }
}

export default{
    insert,
    evaluate,
    dlt
}