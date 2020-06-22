import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import styled from "styled-components";
import emailjs from "emailjs-com";

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

  const [contato, setContato] = useState({
    nome: '',
    email: '',
    telefone: '',
    message: ''
  });

  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const  template_id = process.env.REACT_APP_EMAIJS_TEMPLATE_ID;
  const user_id = process.env.REACT_APP_EMAILJS_USER_ID;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, e.target, user_id)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  let handleChange = (e) => {
    let nome = e.target.name;
    let value = e.target.value;
    contato[nome] = value;
    setContato(contato);
  }

  return <ContatoContainer>
    <h1 id="contato">Contato</h1>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Row>
          <Col md="6" xs="12">
            <Col md="12">
              <Label for="email">Email:</Label>
              <Input onChange={handleChange} type="email" name="email" id="email" placeholder="E.x.: email@email.com" />
            </Col>
            <Col md="12">
              <Label for="nome">Nome:</Label>
              <Input onChange={handleChange} name="nome" id="nome" />
            </Col>
            <Col md="12">
              <Label>Telefone:</Label>
              <Input onChange={handleChange} name="telefone" />
            </Col>
          </Col>
          <Col md="6" xs="12">
            <Label for="mensagem">Mensagem: </Label>
            <Input onChange={handleChange} type="textarea" name="message" id="mensagem" />
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