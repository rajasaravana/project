import React, { useEffect, useRef, useState } from 'react'
import logo from '../logo.svg';
import '../App.css';
import { Button, Card, Form  } from 'react-bootstrap';
import {Container, Row, Col, ListGroup } from 'react-bootstrap';



const ListData = ({props}) =>  {
    let data = [];
    const [value, setValue] = useState({getData: []});
    const getData = [...value.getData];
    let val = props.qp;
    console.log(val)
    if((val.firstName && val.lastName != "")){        
        console.log("val",val)
        getData.push(val)
        console.log("getData",getData);
        setValue({ getData: [...value.getData, getData[0]] })
    }
    return(
     <div>
         {JSON.stringify(props.qp)}
     </div>
    );
}


export default ListData;