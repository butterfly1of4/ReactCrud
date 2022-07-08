import React, { Component } from "react";
import App from '../App/App'
import {Table, Container, Row, Col} from 'react-bootstrap'
import NewList from "../NewList/NewList";
import './CalendarView.css'

class CalendarView extends Component{
  constructor(props){
    super(props)
      this.state = {
          task: ""
      }
      this.setTask = this.setTask.bind(this);
    }
  setTask = (e) =>{
    this.setState ({
        task: e.target.value
    })

    }
    render() { 

    return(
        <Container id="cal" fluid>
                  <Row>
                    <Col xs={2}>Time</Col>
                    <Col>Task</Col>

                  </Row>
        
              <Row>
                <Col type="number" value="1" xs={1}>1</Col>
                <Col xs={1}>
                  <Row>00</Row>
                  <Row>15</Row>
                  <Row>30</Row>
                  <Row>45</Row>
                </Col>
                <Col>{this.task}</Col>
              </Row>
       


            

        </Container>
    )
  }
  }
  
  export default CalendarView



  {/* <Card style={{ width: '70%' }} class="card"> */}
{/* <Table striped bordered hover size="sm" responsive style={{ width: '70%', "margin-left": "auto", "margin-right": "auto" }} >
<thead>
<tr>
<th id="time">TIME</th>
<th id="task">TASK: </th>
<th id="notes">NOTES:</th>

</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<td>2</td>
<td>Jacob</td>
<td>Thornton</td>

</tr>
<tr>
<td>3</td>
<td colSpan={2}>Larry the Bird</td>

</tr>
</tbody>
</Table> */}
{/* </Card> */}