import React from 'react';
import './App.css';
import Menu from '../MenuHeader'
import Rotas from '../Rotas'
import { Container } from 'semantic-ui-react'
import '../../styles/estilizacao.css'

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Container style={{ marginTop: '7em' }}>
        <Rotas />
      </Container>
    </div>
  );
}

export default App;
