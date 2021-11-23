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
  render() {
    return (
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.ibb.co/3FDnKk8/yoga-ga9cb854d5-1920.jpg"
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
            <Button as="input" type="submit" value="Inscribir" />{" "}
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
            <Button as="input" type="submit" value="Inscribir" />{" "}
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
              espacios de de mejora del clima organizaciional. dirigido a
              funcionarios de todos los niveles. Cierre de Inscripciones: 30 de
              Noviembre Hora:3 pm
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button as="input" type="submit" value="Inscribir" />{" "}
          </Card.Footer>
        </Card>
      </CardGroup>
    );
  }
}
