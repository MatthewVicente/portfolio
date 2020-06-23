import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import styled from "styled-components";
import emailjs from "emailjs-com";

const ContatoContainer = styled.div`
  #contato {
    margin-bottom: 20px;
  }

  input, textarea {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
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

const Error = styled.div`
  width: 70%;
  color: #ce0f0f;
  margin-top: 30px;
  border-radius: 10px;
  border-color: #f5c6cb;
  padding: 15px;
  background-color: #f8d7da;
`;

const Contato = () => {

  const [contato, setContato] = useState({
    nome: '',
    email: '',
    telefone: '',
    message: ''
  });
  const [enviando, setEnviando] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const  template_id = process.env.REACT_APP_EMAIJS_TEMPLATE_ID;
  const user_id = process.env.REACT_APP_EMAILJS_USER_ID;

  const onSubmit = data => {
    setEnviando(true);
    const refForm = document.getElementById("contact-form");

    emailjs.sendForm(service_id, template_id, refForm, user_id)
      .then((result) => {
        console.log(result.text);
        setEnviando(false);
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
    <Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Row>
          <Col md="6" xs="12">
            <Col md="12">
              <Label for="email">Email*:</Label>
              <input onChange={handleChange} type="email" name="email" id="email" placeholder="E.x.: email@email.com" ref={register({ required: true })}/>
              {errors.email && <Error>Por favor, preencha o campo Email</Error>}
            </Col>
            <Col md="12">
              <Label for="nome">Nome*:</Label>
              <input onChange={handleChange} name="nome" id="nome" ref={register({ required: true })}/>
              {errors.nome && <Error>Por favor, preencha o campo Nome</Error>}
            </Col>
            <Col md="12">
              <Label>Telefone:</Label>
              <input onChange={handleChange} name="telefone" ref={register}/>
              {errors.telefone && <Error>Por favor, preencha o campo Telefone</Error>}
            </Col>
          </Col>
          <Col md="6" xs="12">
            <Label for="mensagem">Mensagem*: </Label>
            <textarea onChange={handleChange} type="textarea" name="message" id="mensagem" ref={register({ required: true })}></textarea>
            {errors.message && <Error>Por favor, preencha o campo Message</Error>}
          </Col>
          <Col md='12' className="submit-button">
            <Button color="success" disabled={enviando}>{enviando ? "Enviando..." : "Enviar"}</Button>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  </ContatoContainer>
}

export default Contato;