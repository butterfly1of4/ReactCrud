import React, { Component } from "react";
import App from '../App/App'
import { InputGroup, Form, FormControl} from "react-bootstrap";
import '../NewList/NewList.css'


class NewList extends Component {
  constructor(props){
    super(props);
  }
    render () {
      return (
        <div id="table">
          <div id="list_name">

        <Form.Label size="md">List Name: </Form.Label>
        <Form.Control id="name" placeholder="name" type="text" />
        </div>
        <>
  <InputGroup className="mb-3" >
    <div id="set_times">
    <div id="start">
      <Form.Label>Start Time: </Form.Label>
    <Form.Select title="Hour" id="sel-hour">
      <option value="1" href="#1">1</option>
      <option value="2" href="#">2</option>
      <option value="3" href="#">3</option>
      <option value="4" href="#">4</option>
      <option value="5" href="#">5</option>
      <option value="6" href="#">6</option>
      <option value="7" href="#">7</option>
      <option value="8" href="#">8</option>
      <option value="9" href="#">9</option>
      <option value="10" href="#">10</option>
      <option value="11" href="#">11</option>
      <option value="12" href="#">12</option>
    </Form.Select> 

     <Form.Select title="Minutes" id="input-group-option-2">
      <option value="0" href="#">00</option>
      <option value="15" href="#">15</option>
      <option value="30" href="#">30</option>
      <option value="45" href="#">45</option>
    </Form.Select>
    </div>
    {/* </InputGroup>

    <InputGroup className="mb-3"> */}
    <div id="end">
    <Form.Label>End Time: </Form.Label>
    <Form.Select title="Hour" id="input-group-option-1">
      <option value="1" href="#1">1</option>
      <option value="2" href="#">2</option>
      <option value="3" href="#">3</option>
      <option value="4" href="#">4</option>
      <option value="5" href="#">5</option>
      <option value="6" href="#">6</option>
      <option value="7" href="#">7</option>
      <option value="8" href="#">8</option>
      <option value="9" href="#">9</option>
      <option value="10" href="#">10</option>
      <option value="11" href="#">11</option>
      <option value="12" href="#">12</option>
    </Form.Select> 
     <Form.Select title="Minutes" id="input-group-option-2">
      <option value="0" href="#">00</option>
      <option value="15" href="#">15</option>
      <option value="30" href="#">30</option>
      <option value="45" href="#">45</option>
    </Form.Select>
    </div>
    </div>
  </InputGroup>
<Form id="task">
  <Form.Label aria-label="task">Task: </Form.Label>
        <Form.Control as="input" type="text"></Form.Control></Form>
</>
        </div>
    )
  } //end render
  }
  export default NewList




