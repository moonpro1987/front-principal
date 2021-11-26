import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import EventosBuscar from './crude/buscar';
import EventosCrear from './crude/crear';

import './eventos.css';

export default class Eventos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'buscar',
    };

    this.changeTab = this.changeTab.bind(this);
  }
  changeTab(tab) {
    this.setState({
      currentTab: tab,
    });
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
            <EventosBuscar />
          ) : (
            <EventosCrear changeTab={this.changeTab} />
          )}
        </Row>
      </Container>
    );
  }
}