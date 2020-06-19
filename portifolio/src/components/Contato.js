import React from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

const Contato = () => {
  return <div>
    <h1 id="Contato">Contato</h1>
    <Form>
      <FormGroup>
        <Row>
          <Col md="6">
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="email" placeholder="E.x.: email@email.com" />
          </Col>
          <Col md="6">
            <Label>Nome:</Label>
            <Input name="nome" id="nome"/>
          </Col>
          <Col md="12">
            <Label for="exampleText">Mensagem: </Label>
            <Input type="textarea" name="text" id="mensagem" />
          </Col>
          <Col md="6">
            <Button color="success">Enviar</Button>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  </div>
}

export default Contato;