import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormGroup, Label, Button, Row, Col } from "reactstrap";
import styled from "styled-components";
import emailjs from "emailjs-com";

const ContatoContainer = styled.div`
  #contato {
    margin-bottom: 20px;
  }

  input, input:focus, textarea, textarea:focus {
    width: 100%;
    padding: 5px;
    color: white;
    border: 1px solid #484747;
    border-radius: 5px;
    background: #484747;
  }

  /* Change the white to any color ;) */
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px #484747 inset !important;
  }

  /*Change text in autofill textbox*/
  input:-webkit-autofill {
    -webkit-text-fill-color: white !important;
  }

  label {
    width: 100%;
    color: #ed145b; 
    text-align: left;
    margin-top: 10px;
  }

  #mensagem {
    height: 213px;
  }

  .submit-button {
    text-align: end;
    margin-top: 30px;
  }
`;

const Error = styled.div`
  width: 70%;
  padding: 15px;
  color: #ce0f0f;
  margin-top: 30px;
  border-radius: 10px;
  border-color: #f5c6cb;
  background-color: #f8d7da;
`;

const Contato = () => {  
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
        window.location.reload(true);
      }, (error) => {
        console.log(error.text);
      }); 
  }

  return <ContatoContainer>
    <h1 id="contato">Contato</h1>
    <Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Row>
          <Col md="6" xs="12">
            <Col md="12">
              <Label for="email">Email*:</Label>
              <input type="email" name="email" id="email" placeholder="E.x.: email@email.com" ref={register({ required: true })}/>
              {errors.email && <Error>Por favor, preencha o campo Email</Error>}
            </Col>
            <Col md="12">
              <Label for="nome">Nome*:</Label>
              <input name="nome" id="nome" ref={register({ required: true })}/>
              {errors.nome && <Error>Por favor, preencha o campo Nome</Error>}
            </Col>
            <Col md="12">
              <Label>Telefone:</Label>
              <input name="telefone" placeholder="E.x.: (xx) xxxxx-xxxx" ref={register}/>
              {errors.telefone && <Error>Por favor, preencha o campo Telefone</Error>}
            </Col>
          </Col>
          <Col md="6" xs="12">
            <Label for="mensagem">Mensagem*: </Label>
            <textarea type="textarea" name="message" id="mensagem" ref={register({ required: true })}></textarea>
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