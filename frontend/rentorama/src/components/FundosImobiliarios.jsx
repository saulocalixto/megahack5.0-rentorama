import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const FundosImobiliarios = () => (
  <Card>
    <Image size='medium' src='../../images/fii.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Fundos Imobiliários</Card.Header>
      <Card.Meta>
        <span className='date'>Baixo Risco</span>
      </Card.Meta>
      <Card.Description>
        Nessa modalidade de investimento você irá investir em ativos imobiliários. Você ganha dinheiro com a valorização da cota e com a distribuição de lucro.
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

export default FundosImobiliarios
