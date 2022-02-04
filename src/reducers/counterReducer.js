export const initialState = {
    counter:0
}

export default function reducer(state,action){
    let newState;
    switch(action.type){
        case 'add':
            newState = {counter: state.counter +1}
            break;
        case 'sub':
            newState = {counter: state.counter -1}
            break;
        case 'addBy':
            newState = {counter: state.counter + action.amount}
            break;
    }

    return newState
}