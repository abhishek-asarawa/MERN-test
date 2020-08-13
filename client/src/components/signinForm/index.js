import React, { Fragment } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default React.memo(function Signin(props) {
    const {inputHandler, submitHandler, error, formData:{email, password, address, zip, city, state}} = props;

  return (
      <Fragment>
        <h3>Signin</h3>
        {!!error && <div className="alert alert-danger">{error}</div>}
        <Form onSubmit={submitHandler}>
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input 
                    value={email}
                    onChange={inputHandler} 
                    type="email" 
                    name="email" 
                    id="Email" 
                    placeholder="Enter Your Email" 
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input 
                    value={password}
                    onChange={inputHandler} 
                    type="password" 
                    name="password" 
                    id="Password" 
                    placeholder="Create Password" />
                </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="Address">Address</Label>
                <Input 
                value={address}
                onChange={inputHandler} 
                type="text" 
                name="address" 
                id="Address" 
                placeholder="Enter Your Address"
                />
            </FormGroup>
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="City">City</Label>
                    <Input 
                    value={city}
                    onChange={inputHandler} 
                    type="text" 
                    name="city" 
                    id="City"/>
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label for="State">State</Label>
                    <Input 
                    value={state}
                    onChange={inputHandler} 
                    type="text" 
                    name="state" 
                    id="State"/>
                </FormGroup>
                </Col>
                <Col md={2}>
                <FormGroup>
                    <Label for="Zip">Zip</Label>
                    <Input
                    value={zip} 
                    onChange={inputHandler} 
                    type="text" 
                    name="zip" 
                    id="Zip"/>
                </FormGroup>  
                </Col>
            </Row>
            <Button className={"btn btn-warning"} type={"submit"}>Sign in</Button>
        </Form>
      </Fragment>
    
  );
});