import React, { Component } from 'react'
import * as Map from './Maps'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import EducationImage from '../assets/img/education.svg'

class TrilhaArrojada extends Component {
    render() {
        return (
            <div>
                <h1>Seja bem-vindo!</h1>
                <img src={EducationImage} />
                <button class="ui inverted green button">Continuar</button>
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

export default withRouter(connect(mapStateToProps, Map.mapDispatchToProps)(TrilhaArrojada));