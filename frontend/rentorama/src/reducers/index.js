
import { combineReducers } from "redux";

export const initialStateSessao = {
    token: '',
    perfil: ''
};

function sessaoReducer(state = initialStateSessao, action) {
    let token = '';
    let perfil = '';
    switch (action.type) {
        case 'FAZER_LOGIN':
            token = action.token;
            token.sucess = true
            return {
                ...state,
                token,
            };
        case 'DESLOGAR':
            token = '';
            return {
                ...state,
                token,
            };
        case 'DEFINIR_PERFIL':
            perfil = action.perfil;
            console.log(perfil)
            return {
                ...state,
                perfil,
            };
        default:
            return {
                ...state
            }
    }
}

export default combineReducers({ sessaoReducer });