import React from 'react'
import {
  Container,
  Image,
  Menu
} from 'semantic-ui-react'
import icon from '../icone.png'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const MenuHeader = (props) => (
  <div>
    <Menu fixed='top' inverted className="menu-rentorama">
      <Container>
        <Menu.Item as='a' header onClick={() => props.history.push("/produtos/")}>
          <Image size='mini' src={icon} style={{ marginRight: '1.5em' }} />
          Rentorama
        </Menu.Item>
        <Menu.Item onClick={() => props.history.push("/desvendar-perfil/")}>Perfil</Menu.Item>
        <Menu.Item onClick={() => props.history.push("/trilhas/")}>Trilhas</Menu.Item>
        <Menu.Item>Sobre</Menu.Item>
        <Menu.Item onClick={() => props.history.push('/ranking/')}>Ranking</Menu.Item>
      </Container>
    </Menu>
  </div>
)

export default withRouter(connect()(MenuHeader));