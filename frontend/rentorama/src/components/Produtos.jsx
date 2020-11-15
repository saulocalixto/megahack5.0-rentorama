import React, { Component } from 'react'
import * as Map from './Maps'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Header, Grid } from "semantic-ui-react";
import TesouroDireto from './TesouroDireto'
import FundosImobiliarios from './FundosImobiliarios';

class Produtos extends Component {

    state = {
        titular: {},
        conta: {}
    }

    render() {
        return (
            <div>
                <Header as='h1'>Tela Inicial</Header>

                <Grid relaxed columns={2}>
                    <Grid.Column>
                        <TesouroDireto />
                    </Grid.Column>
                    <Grid.Column>
                        <FundosImobiliarios />
                    </Grid.Column>
                    <Grid.Column>
                        <TesouroDireto />
                    </Grid.Column>
                    <Grid.Column>
                        <FundosImobiliarios />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    const storePessoa = store.pessoaReducer
    const storeCount = store.countReducer
    const storeOperacao = store.operacaoReducer
    const storeSessao = store.sessaoReducer
    return {
        ...storePessoa,
        ...storeCount,
        ...storeOperacao,
        ...storeSessao
    }
}

export default withRouter(connect(mapStateToProps, Map.mapDispatchToProps)(Produtos));