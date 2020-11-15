import {
  fazerLogin,
definirPerfil } from '../actions/index'

export const mapDispatchToProps = (dispatch) => {
    return {
      fazerLogin: (login) => dispatch(fazerLogin(login)),
      definirPerfil: (perfil) => dispatch(definirPerfil(perfil)),
    }
  }