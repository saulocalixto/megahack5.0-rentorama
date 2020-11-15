import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Login from './Login'
import DesvendarPerfil from './DesvendarPerfil'
import Ranking from './Ranking'
import TelaInicial from './TelaInicial'
import Trilhas from './Trilhas'
import TrilhaConservadora from './TrilhaConservadora'
import TrilhaModerada from './TrilhaModerada'
import TrilhaArrojada from './TrilhaArrojada'
import Produtos from './Produtos'

import QuizTrilhaConservadora from './QuizTrilhaConservadora'
import QuizTrilhaModerada from './QuizTrilhaModerada'
import QuizTrilhaArrojada from './QuizTrilhaArrojada'

const Rotas = props => {
  return (
    <div>
      <Route
        exact
        path="/"
        render={() => (
            <Login />
        )}
      />
      <Route
        exact
        path="/desvendar-perfil"
        render={() => {
            return props.token.sucess ? <DesvendarPerfil /> : <Login />
        }}
      />
      <Route
        exact
        path="/ranking"
        render={() => {
            return props.token.sucess ? <Ranking /> : <Login />
        }}
      />
      <Route
        exact
        path="/telaInicial"
        render={() => {
            return props.token.sucess ? <TelaInicial /> : <Login />
        }}
      />
      <Route 
        exact
        path="/produtos"
        render={() => {
          return props.token.sucess ? <Produtos /> : <Login />
        }}
      />
      <Route
        exact
        path="/trilhas"
        render={() => {
            return props.token.sucess ? <Trilhas /> : <Login />
        }}
      />
      <Route 
        exact
        path="/trilhas/trilhaConservadora"
        render={() => {
          return props.token.sucess ? <TrilhaConservadora /> : <Login />
        }}
      />
      <Route 
        exact
        path="/trilhas/trilhaModerada"
        render={() => {
          return props.token.sucess ? <TrilhaModerada /> : <Login />
        }}
      />
      <Route 
        exact
        path="/trilhas/trilhaArrojada"
        render={() => {
          return props.token.sucess ? <TrilhaArrojada /> : <Login />
        }}
      />
      <Route 
        exact
        path="/trilhas/quizTrilhaArrojada"
        render={() => {
          return props.token.sucess ? <QuizTrilhaArrojada /> : <Login />
        }}
      />
      <Route 
        exact
        path="/trilhas/quizTrilhaModerada"
        render={() => {
          return props.token.sucess ? <QuizTrilhaModerada /> : <Login />
        }}
      />
      <Route 
        exact
        path="/trilhas/quizTrilhaConservadora"
        render={() => {
          return props.token.sucess ? <QuizTrilhaConservadora /> : <Login />
        }}
      />
    </div>
  );
};

const mapStateToProps = (store) => {
    const token = store.sessaoReducer.token
    return {
        token
    }
  }

export default withRouter(connect(mapStateToProps)(Rotas));