import React, { useEffect, useRef, useState } from 'react'
import logo from '../logo.svg';
import '../App.css';
import { Button, Card, Form  } from 'react-bootstrap';
import {Container, Row, Col, ListGroup } from 'react-bootstrap';
import ListData from './ListData';




function Sample(){
  const firstName = useRef(null);
  const lastName = useRef(null);
  const [quip, setQuip] = useState({ firstName: "", lastName: "" });

 function handleClick() {
    firstName.current.focus();
    lastName.current.focus();
    console.log("f", firstName.current);
    console.log("f", firstName.current?.value);
    console.log("L", lastName.current?.value)
    if((firstName.current.value!= quip.firstName)&&(lastName.current.value!= quip.lastName)){
      console.log( firstName.current.value)
      console.log( lastName.current.value)
      setQuip({
        firstName: firstName.current.value,
        lastName: lastName.current.value
      });
    }
     
  }
  
  /*useEffect(() => {
    console.log('useEffect',JSON.stringify(quip))
  },[quip])*/


    return(
      <Card className="Sample">
        <Form>
          <Row>
            <Col>
              <label>FirstName
                <input placeholder="FirstName " ref={firstName} />
              </label><br></br>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>LastName
                <input placeholder="LastName" ref={lastName} />
              </label><br></br>
            </Col>
          </Row>
          <Row>
            <Col>
            <div className="d-grid gap-2">
            <Button variant="outline-primary" onClick={() => handleClick()}>Submit</Button>
            </div>
            </Col>
          </Row>
          
        </Form>
        {
          <Row>
            <ListData props={{qp: quip}}/>
          </Row>
        }
      </Card>
    );
}


export default Sample;