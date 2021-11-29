import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helpers";
import Loading from "../../Loading/Loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationPrompts from "../../prompts/confirmation";

export default class EventosEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idEvento: this.props.getIdEvento(),
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      confirmation: {
        title: "Modificar Evento",
        text: "¿Esta seguro que desea modificar el evento?",
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
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount() {
    this.getEvento();
  }

  getEvento() {
    this.setState({ loading: true });
    request
      .get(`/eventos/${this.state.idEvento}`)
      .then((response) => {
        this.setState({
          evento: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
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
      .put(`/eventos/${this.state.idEvento}`, this.state.evento)
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

  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }

  onConfirm() {
    this.setState(
      {
        confirmation: {
          ...this.state.confirmation,
          show: false,
        },
      },
      this.guardarEventos()
    );
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

        <ConfirmationPrompts
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />

        <Loading show={this.state.loading} />
        <Row>
          <h1>Editar Evento</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>NomEvento</Form.Label>
              <Form.Control
                value={this.state.evento.nomEvento}
                onChange={(e) => this.setValue("nomEvento", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                value={this.state.evento.descripcion}
                onChange={(e) => this.setValue("descripcion", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                value={this.state.evento.fecha}
                onChange={(e) => this.setValue("fecha", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>hora</Form.Label>
              <Form.Control
                value={this.state.evento.hora}
                onChange={(e) => this.setValue("hora", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>NumAsistentes</Form.Label>
              <Form.Control
                value={this.state.evento.numAsistentes}
                onChange={(e) => this.setValue("numAsistentes", e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() =>
                this.setState({
                  confirmation: { ...this.state.confirmation, show: true },
                })
              }
            >
              Guardar Evento
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
