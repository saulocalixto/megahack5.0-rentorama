import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const TesouroDireto = () => (
  <Card>
    <Image size='medium' src='../../images/tesouro.jpg' wrapped ui={true} />
    <Card.Content>
      <Card.Header>Tesouro Direto</Card.Header>
      <Card.Meta>
        <span className='date'>Baixo Risco</span>
      </Card.Meta>
      <Card.Description>
        Nessa modalidade de investimento você impresta dinheiro para o governo e ele o devolve com juros! Rende mais que a poupança e é tão seguro quanto.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Popular
      </a>
    </Card.Content>
  </Card>
)

export default TesouroDireto
