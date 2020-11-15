import React, { Component } from "react";
import { Form, Button, Modal } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import * as Map from './Maps'
import { withRouter } from "react-router-dom";

class DesvendarPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            openRetorno: false,
            titulo: '',
            mensagem: ''
        };
    }

    definaModal = () => {
        return (
            <Modal
            header='Para prosseguirmos, precisamos saber qual o seu perfil. Por favor, responda este formulário para definirmos sua trilha'
            content= {this.retornaIdadeFinanceira()}
            size={'mini'}
            onClose={() => this.setState({ open: false })}
            onOpen={() => this.setState({ open: true })}
            open={this.state.open}
          />
        )
    }

    retornaIdadeFinanceira = () => {
        return (
            <div class='trilhas' style={{ textAlign: 'left'} }>
                <Form onSubmit={this.definirPerfil}>
                    <Form.Group grouped>
                        <b></b><label>Como está sua saúde financeira?</label>
                        <Form.Field
                            label='Após pagar as contas do mês sobra dinheiro'
                            control='input'
                            type='radio'
                            name='htmlRadios1'
                            value='3'
                        />
                        <Form.Field
                            label='Tem meses que gasto mais do que ganho'
                            control='input'
                            type='radio'
                            name='htmlRadios1'
                            value='1'
                        />
                        <Form.Field
                            label='Tenho reserva de emergência'
                            control='input'
                            type='radio'
                            name='htmlRadios1'
                            value='4'
                        />
                        <Form.Field
                            label='Queria que meu dinheiro rendesse mais do que a poupança'
                            control='input'
                            type='radio'
                            name='htmlRadios1'
                            value='5'
                        />
                    </Form.Group>
                    <Form.Group grouped>
                        <label>Qual seu objetivo com investimentos?</label>
                        <Form.Field
                            label='Viver dos meus rendimentos'
                            control='input'
                            type='radio'
                            name='htmlRadios2'
                            value='5'
                        />
                        <Form.Field
                            label='Quero deixar meu dinheiro rendendo no máximo 5 anos'
                            control='input'
                            type='radio'
                            name='htmlRadios2'
                            value='3'
                        />
                        <Form.Field
                            label='Reserva de emergência que renda mais'
                            control='input'
                            type='radio'
                            name='htmlRadios2'
                            value='2'
                        />
                        <Form.Field
                            label='Quero ficar rico, mas não sei como'
                            control='input'
                            type='radio'
                            name='htmlRadios2'
                            value='5'
                        />
                    </Form.Group>
                    <Form.Group grouped>
                        <label>Selecione a baixo a frase que você mais se identifica:</label>
                        <Form.Field
                            label='Plantar agora para colher lá na frente'
                            control='input'
                            type='radio'
                            name='htmlRadios3'
                            value='3'
                        />
                        <Form.Field
                            label='Juntar dinheiro para comprar meu carro ou casa'
                            control='input'
                            type='radio'
                            name='htmlRadios3'
                            value='1'
                        />
                        <Form.Field
                            label='Quem não arrisca não petisca, não há crescimento na zona de conforto'
                            control='input'
                            type='radio'
                            name='htmlRadios3'
                            value='5'
                        />
                    </Form.Group>
                    <Button className='ui inverted green button'>Confirmar</Button>
                </Form>
            </div>
        )
    }

    definirPerfil = (e) => {

        let somaDePontos = 0
        let perfil = 'CONSERVADOR'

        for(var i =0; i < e.target.length; i++){
            if(e.target[i].checked) {
                somaDePontos += parseInt(e.target[i].value)
            }            
        }

        let titulo = '';
        let mensagem = '';

        if(somaDePontos < 5) {
            perfil = 'CONSERVADOR'
            titulo = 'Conservador'
            mensagem = 'Seu perfil é conservador, você prefere segurança na hora de investir e não espera altos rendimentos.'
        } else if(somaDePontos < 12) {
            perfil = 'MODERADO'
            titulo = 'Moderado'
            mensagem = 'Seu perfil é moderado, você preza pela segurança em seus investimentos, mas está disposto a arriscar um pouco mais para conseguir melhor retorno.'
        } else {
            perfil = 'ARROJADO'
            titulo = 'Arrojado'
            mensagem = 'Com o perfil arrojado você já apresenta mais predisposição a arriscar em seus investimentos para conseguir altos lucros. Pessoas com esse perfil costumam já ter um bom conhecimento no mercado financeiro.'
        }

        this.setState({ openRetorno: true, titulo, mensagem, open: false })
    }

    render() {
        return (
            <div class='perfil'>
                { this.definaModal() }
                <Modal
                    header={this.state.titulo}
                    content= {this.state.mensagem}
                    size={'mini'}
                    onClose={() => {
                        this.setState({ openRetorno: false })
                        switch(this.state.titulo) {
                            case 'Conservador':
                                this.props.history.push("/trilhas/trilhaConservadora")
                                break;
                            case 'Moderado':
                                this.props.history.push("/trilhas/trilhaModerada")
                                break;
                            case 'Arrojado':
                                this.props.history.push("/trilhas/trilhaArrojada")
                                break;
                            default:
                                break;
                        }
                    }}
                    onOpen={() => this.setState({ openRetorno: true })}
                    open={this.state.openRetorno}
                    actions={['Ir para trilha']}
                />
            </div>)
    }
};

const mapStateToProps = (store) => {
    const pessoas = store.pessoas
    return {
        pessoas
    }
  }

export default withRouter(connect(mapStateToProps, Map.mapDispatchToProps)(DesvendarPerfil));
