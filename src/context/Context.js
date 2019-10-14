import React, {useReducer} from 'react';

const Context = React.createContext();


const reducer = (state,action) => {
    switch(action.type){
        case 'change_state':
            return {term: action.payload}
        default:
            return state;
    }
}

export const Provider = ({children}) => {

    const [data, dispatch] = useReducer(reducer, {term: 'Initial State'});

    const changeState = () => {
        dispatch({type:'change_state', payload: 'New State'});
    }

    return (
        <Context.Provider value={{data, changeState}}>
        {children}
    </Context.Provider>
    )
}

export default Context;



