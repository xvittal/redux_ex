import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes'; 
const initialState = {
    newValue: ''
};

export const clickReducer = (state = initialState, action) => {
    switch (action.type){
        case CLICK_UPDATE_VALUE: //=> aqui ele esta exportando de action types, assim não precisando ficar escrevendo manualmente aqui o nome da ação que deseja!
            return {...state, newValue: action.newValue};
        default: return state;
    }
};