import React, { Component } from 'react'
import * as Map from './Maps'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Header, Table } from "semantic-ui-react";

class Ranking extends Component {

    usuarios = [
        { posicao: 1, usuario: 'Fernando Henrique', perfil: 'Moderado' },
        { posicao: 2, usuario: 'Debora Cristina', perfil: 'Conservador' },
        { posicao: 3, usuario: 'Alvaro Limão', perfil: 'Arrojado' },
        { posicao: 4, usuario: 'Saulo DaVinci', perfil: 'Conservador' },
        { posicao: 5, usuario: 'Tereza Cristina', perfil: 'Arrojado' },
        { posicao: 6, usuario: 'Maria Lima', perfil: 'Conservador' },
        { posicao: 7, usuario: 'Naruto Ninja Trader', perfil: 'Arrojado' },
        { posicao: 8, usuario: 'Álvaro Luis', perfil: 'Moderado' },
        { posicao: 9, usuario: 'Álamo de Cézamo', perfil: 'Moderado' },
        { posicao: 10, usuario: 'Carlos Luiz', perfil: 'Conservador' },
    ]

    render() {
        return (
            <div>
                <Header as='h1'>Ranking</Header>
                <Table color='olive' key='ranking'>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Posição</Table.HeaderCell>
                        <Table.HeaderCell>Usuário</Table.HeaderCell>
                        <Table.HeaderCell>Perfil</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            this.usuarios.map(x => 
                                <Table.Row>
                                    <Table.Cell>{x.posicao}</Table.Cell>
                                    <Table.Cell>{x.usuario}</Table.Cell>
                                    <Table.Cell>{x.perfil}</Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
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

export default withRouter(connect(mapStateToProps, Map.mapDispatchToProps)(Ranking));