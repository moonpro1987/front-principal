import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helpers";
import Loading from "../../Loading/Loading";
import MessagePrompt from "../../prompts/message";

export default class EventosCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      loading: false,
      evento: {
        nomEvento: "",
        descripcion: "",
        fecha: "",
        hora: "",
        numAsistentes: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }
  setValue(index, value) {
    this.setState({
      evento: {
        ...this.state.evento,
        [index]: value,
      },
    });
  }
  guardarEventos() {
    this.setState({ loading: true });
    request
      .post("/eventos", this.state.evento)
      .then((response) => {
        if (response.data.exito) {
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      });
  }
  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab("buscar");
  }
  render() {
    return (
      <Container id="eventos-crear-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Crear Evento</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>NomEvento</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("nomEvento", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("descripcion", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("fecha", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>hora</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("hora", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>NumAsistentes</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("numAsistentes", e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => console.log(this.guardarEventos())}
            >
              Guardar Evento
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
