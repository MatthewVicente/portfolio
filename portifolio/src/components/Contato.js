import React from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import styled from "styled-components";

const ContatoContainer = styled.div`
  #contato {
    margin-bottom: 20px;
  }

  label {
    width: 100%;
    color: #ed145b; 
    text-align: left;
    margin-top: 10px;
  }

  #mensagem {
    height: 200px;
  }

  .submit-button {
    text-align: end;
    margin-top: 30px;
  }
`;

const Contato = () => {
  return <ContatoContainer>
    <h1 id="contato">Contato</h1>
    <Form>
      <FormGroup>
        <Row>
          <Col md="6" xs="12">
            <Col md="12">
              <Label for="email">Email:</Label>
              <Input type="email" name="email" id="email" placeholder="E.x.: email@email.com" />
            </Col>
            <Col md="12">
              <Label for="nome">Nome:</Label>
              <Input name="nome" id="nome"/>
            </Col>
            <Col md="12">
              <Label>Telefone:</Label>
              <Input name="telefone"/>
            </Col>
          </Col>
          <Col md="6" xs="12">
            <Label for="mensagem">Mensagem: </Label>
            <Input type="textarea" name="text" id="mensagem" />
          </Col>
          <Col md="12" className="submit-button">
            <Button color="success">Enviar</Button>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  </ContatoContainer>
}

export default Contato;