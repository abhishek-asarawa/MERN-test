import React, { Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default React.memo(function login(props) {
  const { submitHandler, inputHandler, formData:{email, password}, error} = props;
  return (
    <Fragment>
      <h3>LOGIN</h3>
      <hr></hr>
      {!!error && <div className="alert alert-danger">{error}</div>}
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input value={email} type="email" name="email" id="Email" placeholder="Enter Your Email" onChange={inputHandler}/>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input value={password} type="password" name="password" id="Password" placeholder="Enter Your Password" onChange={inputHandler}/>
        </FormGroup>
        <Button className={"btn btn-success"} type="submit">Submit</Button>
      </Form>
    </Fragment>
    
  );
});