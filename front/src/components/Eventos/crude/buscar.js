import React from "react";
import { request } from "../../helper/helpers";
import { Container, Row, Col } from "react-bootstrap";
// import './empleados.css';
import DataGrid from "../../grid/grid";
import ConfirmationPrompts from "../../prompts/confirmation";
import Loading from "../../Loading/Loading";
import MessagePrompt from "../../prompts/message";


const columns = [
  {
    dataField: "nomEvento",
    text: "NomEvento",
  },
  {
    dataField: "descripcion",
    text: "Descripcion",
  },
  {
    dataField: "fecha",
    text: "Fecha",
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

export default class EventosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idEvento: null,
      confirmation: {
        title: "Eliminar Evento",
        text: "¿Esta seguro que desea eliminar el evento?",
        show: false,
      },
      message: {
        text: '',
        show: false,
      },
    };

    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  onClickEditButton(row) {
    this.props.setIdEvento(row._id);

    this.props.changeTab("editar");
  }

  onClickDeleteButton(row) {
    this.setState({
      idEvento: row._id,
      confirmation: {
        ...this.state.confirmation,
        show: true,
      },
    });
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
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    },
    this.eliminarEvento()    
    );
  }

  eliminarEvento() {
    this.setState({ loading: true });
    request
      .delete(`/eventos/${this.state.idEvento}`)
      .then((response) => {
        this.setState({
          loading: false,
          message: {
            text: response.data.msg,
            show: true,
          },
        });
        if (response.data.exito) this.reloadPage();
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });

  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }

  render() {
    return (
      <Container id="eventos-buscar-container">
        <ConfirmationPrompts
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />



        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}        
        />

        <Loading show={this.state.loading}/>

        <Row>
          <h1>Buscar Eventos</h1>
        </Row>

        <Row>
          <DataGrid
            url="/eventos"
            columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}
          />
        </Row>
      </Container>
    );
  }
}
