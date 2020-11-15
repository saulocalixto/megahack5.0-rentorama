import React, { Component } from 'react'
import * as Map from './Maps'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Image } from 'semantic-ui-react'

import ImgInicialConservadora from '../assets/img/pagina_inicial_trilha.svg'

class TrilhaConservadora extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Container>
                    <h1>Vamos começar?</h1>
                    <Image src={ImgInicialConservadora} wrapped ui={false} />
                    <button className="ui inverted green button" 
                        onClick={() => { this.props.history.push("/trilhas/quizTrilhaConservadora") }}>
                        Começar
                    </button>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    const storePessoa = store.pessoaReducer
    return {
        ...storePessoa
    }
}

export default withRouter(connect(mapStateToProps, Map.mapDispatchToProps)(TrilhaConservadora));