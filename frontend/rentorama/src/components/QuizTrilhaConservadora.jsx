import React, { Component } from 'react'
import * as Map from './Maps'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Modal, Button, Icon, Form } from 'semantic-ui-react'


class QuizTrilhaConservadora extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open1: true,
            open2: false,
            open3:false,
            open4: false,
            open5: false
        };
    }

    render() {
        return (
            <>      
            <Modal
              onClose={() => this.setState({ open1: false })}
              onOpen={() => this.setState({ open4: false })}
              open={this.state.open1}
              size='small'
            >
              <Modal.Header>Trilha Conservadora</Modal.Header>
              <Modal.Content image>
                <div className='image'>
                  <Icon name='right arrow' />
                </div>
                <Modal.Description>
                <p>Olá! Vamos começar a trilha conservadora, para que você possa melhorar seus conhecimentos sobre investimentos e quem sabe poder arriscar mais e ganhar mais dinheiro?</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => this.setState({ open2: true })} className='ui inverted green button'>
                  Começar trilha <Icon name='right chevron' />
                </Button>
              </Modal.Actions>
      
              <Modal
                onClose={() => this.setState({ open2: false })}
                open={this.state.open2}
                size='small'
              >
                <Modal.Header>Você tem um investimento de 1000 reais que desvalorizou nas ultimas semanas: O que você faz?</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.definirPerfil}>
                        <Form.Group grouped>
                            <Form.Field
                                label='Vendo tudo antes que desvalorize ainda mais'
                                control='input'
                                type='radio'
                                name='htmlRadios1'
                                value='3'
                            />
                            <Form.Field
                                label='Deixo lá, sei que vai valorizar novamente'
                                control='input'
                                type='radio'
                                name='htmlRadios1'
                                value='1'
                            />
                        </Form.Group>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    icon='check'
                    className='ui inverted green button'
                    content='Próxima pergunta'
                    onClick={() => { 
                        this.setState({ open3: true })
                        this.setState({ open2: false })
                    }}
                  />
                </Modal.Actions>
              </Modal>
              <Modal
                onClose={() => this.setState({ open3: false })}
                open={this.state.open3}
                size='small'
              >
                <Modal.Header>Qual desses investimentos possui liquidez diária?</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.definirPerfil}>
                        <Form.Group grouped>
                            <Form.Field
                                label='Nenhum'
                                control='input'
                                type='radio'
                                name='htmlRadios1'
                                value='3'
                            />
                            <Form.Field
                                label='Ações'
                                control='input'
                                type='radio'
                                name='htmlRadios1'
                                value='1'
                            />
                            <Form.Field
                                label='Fundos Imobiliários'
                                control='input'
                                type='radio'
                                name='htmlRadios1'
                                value='1'
                            />
                        </Form.Group>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    icon='check'
                    className='ui inverted green button'
                    content='Próxima pergunta'
                    onClick={() => { 
                        this.setState({ open4: true })
                        this.setState({ open3: false })
                    }}
                  />
                </Modal.Actions>
              </Modal>
              <Modal
                onClose={() => this.setState({ open4: false })}
                open={this.state.open4}
                size='small'
              >
                <Modal.Header>Qual desses investimentos que após vendido não pode ser resgatado no mesmo dia?</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.definirPerfil}>
                        <Form.Group grouped>
                            <Form.Field
                                label='Tesouro direto'
                                control='input'
                                type='radio'
                                name='htmlRadios1'
                                value='3'
                            />
                            <Form.Field
                                label='Tesouro selic'
                                control='input'
                                type='radio'
                                name='htmlRadios1'
                                value='1'
                            />
                            <Form.Field
                                label='Ações e fundos imobiliários'
                                control='input'
                                type='radio'
                                name='htmlRadios1'
                                value='1'
                            />
                        </Form.Group>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    icon='check'
                    className='ui inverted green button'
                    content='Próxima pergunta'
                    onClick={() => { 
                        this.setState({ open5: true })
                        this.setState({ open4: false })
                    }}
                  />
                </Modal.Actions>
              </Modal>
              <Modal
                onClose={() => this.setState({ open5: false })}
                open={this.state.open5}
                size='small'
              >
                <Modal.Header>Qual o momento certo para investir em ações de uma determinada empresa?</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.definirPerfil}>
                        <Form.Group grouped>
                            <Form.Field
                                label='Não sei'
                                control='input'
                                type='radio'
                                name='htmlRadios1'
                                value='3'
                            />
                            <Form.Field
                                label='Quando a bolsa de valores está indo bem'
                                control='input'
                                type='radio'
                                name='htmlRadios1'
                                value='1'
                            />
                            <Form.Field
                                label='Quando conheço sobre empresa'
                                control='input'
                                type='radio'
                                name='htmlRadios1'
                                value='1'
                            />
                        </Form.Group>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    icon='check'
                    className='ui inverted green button'
                    content='Finalizar'
                    onClick={() => { 
                        this.props.history.push("/produtos/")
                    }}
                  />
                </Modal.Actions>
              </Modal>
            </Modal>
          </>
        )
    }
}

const mapStateToProps = (store) => {
    const storePessoa = store.pessoaReducer
    return {
        ...storePessoa
    }
}

export default withRouter(connect(mapStateToProps, Map.mapDispatchToProps)(QuizTrilhaConservadora));