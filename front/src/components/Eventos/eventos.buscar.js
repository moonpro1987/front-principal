import React from "react";
import { request } from "../helper/helpers";
import { Container, Row, Col } from "react-bootstrap";

// import './empleados.css';
import DataGrid from "../../components/grid/grid";

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
      <Container id="empleados-buscar-container">
        <Row>
          <h1>Buscar Empleados</h1>
        </Row>

        <Row>
          <DataGrid url="/empleados" columns={columns} />
        </Row>
      </Container>
    );
  }
}
