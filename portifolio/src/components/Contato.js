import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Contato = () => {
  return <div>
    <h1 id="contato">Contato</h1>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  </div>
}

export default Contato;