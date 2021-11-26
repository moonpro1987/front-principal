import React from 'react';
import { request } from '../../helper/helpers';
import { Container, Row, Col } from 'react-bootstrap';

// import './empleados.css';
import DataGrid from '../../grid/grid';


const columns = [
  {
    dataField: 'nomEvento',
    text: 'NomEvento',
  },
  {
    dataField: 'descripcion',
    text: 'Descripcion',
  },
  {
    dataField: 'fecha',
    text: 'Fecha',
  },
  {
    dataField: 'hora',
    text: 'hora',
  },
  {
    dataField: 'numAsistentes',
    text: 'numAsistentes',
  },
];

export default class EventosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    
  }

  render() {
    return (
      <Container id="eventos-buscar-container">
        <Row>
          <h1>Buscar Eventos</h1>
        </Row>

        <Row>
          <DataGrid url="/eventos" columns={columns}showEditButton={true}/>
        </Row>
      </Container>
    );
  }
}