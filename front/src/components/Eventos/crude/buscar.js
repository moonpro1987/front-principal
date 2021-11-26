import React from "react";
import { request } from "../../helper/helpers";
import { Container, Row, Col } from "react-bootstrap";

// import './empleados.css';
import DataGrid from "../../grid/grid";

const columns = [
  {
    dataField: "nomEvento",
    text: "nomEvento",
  },
  {
    dataField: "descripcion",
    text: "descripcion",
  },
  {
    dataField: "fecha",
    text: "fecha",
  },
  {
    dataField: "hora",
    text: "hora",
  },
  {
    dataField: "numAsistentes",
    text: "numAsistentes",
  },
];

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <Container id="eventos-buscar-container">
        <Row>
          <h1>Buscar eventos</h1>
        </Row>

        <Row>
          <DataGrid url="/eventos" columns={columns} />
        </Row>
      </Container>
    );
  }
}
