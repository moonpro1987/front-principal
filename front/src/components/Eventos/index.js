import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import EventosBuscar from './crude/buscar';
import EventosCrear from './crude/crear';
import EventosEditar from './crude/editar';

import './eventos.css';

export default class Eventos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'buscar',
      _id:null,
    };

    this.changeTab = this.changeTab.bind(this);
    this.setIdEvento = this.setIdEvento.bind(this);
    this.getIdEvento = this.getIdEvento.bind(this);
  }
  
  changeTab(tab) {
    this.setState({
      currentTab: tab,
    });
  }

  setIdEvento(id){
    this.setState({ _id: id });
  }

  getIdEvento(){
    return this.state._id;
  }


  render() {
    return (
      <Container id="eventos-container">
        <Row>
          <Nav
            fill
            variant="tabs"
            defaultActiveKey="buscar"
            onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
          >
            <Nav.Item>
              <Nav.Link eventKey="buscar">Buscar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="crear">Crear</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          {this.state.currentTab === 'buscar' ? (
            <EventosBuscar changeTab={this.changeTab} setIdEvento={this.setIdEvento} />
          ) : this.state.currentTab === "crear" ? (
            <EventosCrear changeTab={this.changeTab} />
          ) : (
            <EventosEditar changeTab={this.changeTab} getIdEvento={this.getIdEvento} />
            )}
        </Row>
      </Container>
    );
  }
}