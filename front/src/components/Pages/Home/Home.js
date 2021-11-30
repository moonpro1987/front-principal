import React from "react";
import "./Home.css";
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  inscribirEvento() {
    alert("Evento inscrito");
  }

  render() {
    return (
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.ibb.co/30n44NP/yoga-ga9cb854d5-1920.jpg"
            alt="yoga-ga9cb854d5-1920"
          />
          <Card.Body>
            <Card.Title>YOGA</Card.Title>
            <Card.Text>
              Recuerda que tenemos nuestras clases de yoga online para que
              ingreses y encuentres un espacio de relajacion: Horarios:6 am a
              6:45 am 4:pm a 4:45 pm y 6:pm a 6:45 pm
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              id="btn-enviar"
              variant="primary"
              onClick={() => this.inscribirEvento()}
            >
              Inscribir al evento
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.ibb.co/7RcVwdD/inclusion-g0031fb8b1-1920.png"
            alt="inclusion-g0031fb8b1-1920"
          />
          <Card.Body>
            <Card.Title>Integración Familiar</Card.Title>
            <Card.Text>
              Con el fin de estimular la sana utilizacion del tiempo libre de
              los funcionarios y su familia, generando espacios de
              esparcimiento, recreación,cultura e integración por lo que los
              invitamos el 25 de Noviembre, a compartir un dia de integracion
              familiar. content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              id="btn-enviar"
              variant="primary"
              onClick={() => this.inscribirEvento()}
            >
              Inscribir al evento
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.ibb.co/PwMRR3s/feedback-gcfadc09d1-1920.jpg"
            alt="feedback-gcfadc09d1-1920"
          />
          <Card.Body>
            <Card.Title>Taller de Comunicación Asertiva</Card.Title>
            <Card.Text>
              Te invitamos a participar de este evento que permitirá generar
              espacios de de mejora del clima organizacional. dirigido a
              funcionarios de todos los niveles. Cierre de Inscripciones: 30 de
              Noviembre Hora:3 pm
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              id="btn-enviar"
              variant="primary"
              onClick={() => this.inscribirEvento()}
            >
              Inscribir al evento
            </Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://i.ibb.co/Rz09c5Z/football-gdcc60f72f-1920.jpg"
            alt="football-gdcc60f72f-1920"
          />

          <Card.Body>
            <Card.Title>Torneo de Futbol</Card.Title>
            <Card.Text>
              Bienestar Social invita a todos nuestros colaboradores a
              participar en el primer torneo Futbol 5 masculino y femenino a
              realizarse a partir del 25 de Noviembree CIERRE DE INSCRIPCIONES:
              23 de Septiembre HORA: 6:00 PM
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              id="btn-enviar"
              variant="primary"
              onClick={() => this.inscribirEvento()}
            >
              Inscribir al evento
            </Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://i.ibb.co/2ycBQbs/ball-g2a6e88ba0-1920.jpg"
            alt="ball-g2a6e88ba0-1920"
          />
          <Card.Body>
            <Card.Title>Torneo de Volley</Card.Title>
            <Card.Text>
              Para este mes traemos un torneo relampago de voleibol para
              nuestros colaboradores entre los equipos ya conformados en la
              semana del 18 al 23 de octubre aqui puedes inscribir a tu equipo.
              Cierre de Inscripciones: 16 de Octubre Hora:3 pm
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              id="btn-enviar"
              variant="primary"
              onClick={() => this.inscribirEvento()}
            >
              Inscribir al evento
            </Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://i.ibb.co/7pYYff2/baby-g09c4acbb0-1920.jpg"
            alt="baby-g09c4acbb0-1920"
          />
          <Card.Body>
            <Card.Title>Celebracion Novenas de Navidad</Card.Title>
            <Card.Text>
              Te invitamos a participar de nuestras novenas de aguinaldos, trae
              a tus hijos para hacer de este un momento memorable en familia.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              id="btn-enviar"
              variant="primary"
              onClick={() => this.inscribirEvento()}
            >
              Inscribir al evento
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    );
  }
}
