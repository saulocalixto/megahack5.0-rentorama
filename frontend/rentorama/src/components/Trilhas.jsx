import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import * as Map from './Maps'
import { withRouter } from "react-router-dom";
import { Grid, Image, Card } from 'semantic-ui-react'
import ImagemArrojada from '../assets/img/trilha_arrojada.svg'
import ImagemModerada from '../assets/img/trilha_moderada.svg'
import ImagemConservadora from '../assets/img/trilha_conservadora.svg'

class Trilhas extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Grid container columns={3}>
                    <Grid.Column>
                        <Card>
                            <Image src={ImagemArrojada} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>
                                    Trilha Arrojada
                                </Card.Header>
                                <Card.Description>
                                    Que tal entender a volatilidade dos ativos financeiros e blindar sua carteira no longo prazo.
                                    Mergulhe em situações adversas, entenda e construa a bala de prata para sua carteira de investimentos.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a onClick={() => {this.props.history.push("/trilhas/trilhaArrojada")}}>
                                    Acessar
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card>
                            <Image src={ImagemModerada} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>
                                    Trilha Moderada
                                </Card.Header>
                                <Card.Description>
                                    Aqui você terá segurança e tornará seus investimentos com ativos variáveis no longo prazo.
                                    Sua carteira é segura, combinando rentabilidade versus risco.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a onClick={() => {this.props.history.push("/trilhas/trilhaModerada")}}>
                                    Acessar
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card>
                            <Image src={ImagemConservadora} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>
                                    Trilha Conservadora
                                </Card.Header>
                                <Card.Description>
                                    Invista o seu dinheiro e retire a qualquer momento.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a onClick={() => {this.props.history.push("/trilhas/trilhaConservadora")}}>
                                    Acessar
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
};

const mapStateToProps = (store) => {
    const storePessoa = store.pessoaReducer
    const storeCount = store.countReducer
    const storeSessao = store.sessaoReducer
    return {
        ...storePessoa,
        ...storeCount,
        ...storeSessao
    }
}

export default withRouter(connect(mapStateToProps, Map.mapDispatchToProps)(Trilhas));
