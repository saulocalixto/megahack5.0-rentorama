import * as Api from '../utilitarios/api'

  export const fazerLogin = (token) => {
    return {
      type: "FAZER_LOGIN",
      token
    }
  }

  export const definirPerfil = (perfil) => {
    return {
      type: "DEFINIR_PERFIL",
      perfil
    }
  }