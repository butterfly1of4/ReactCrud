import React, {element} from "react";
import {
  BrowserRouter,
  Routes, 
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App/App.css';
import Nav from 'react-bootstrap/Nav'
import NewUser from '../NewUser/NewUser'
import NewList from '../NewList/NewList'
import SignIn from '../SignIn/SignIn'
import Home from '../Home/Home'
import CalendarView from "../CalendarView/CalendarView";

function App() {
  return (
    <div className="App">
<>
  <Nav className="justify-content-center" activeKey="/home">
  <Nav.Item>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/newuser">New User</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/newlist">New List</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/calview">Calendar View</Nav.Link>
    </Nav.Item>
  </Nav>
</>
    <main>
      <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/newuser" element={<NewUser />}/>
          <Route exact path="/newlist" element={<NewList />} />
          <Route exact path="/calview" element={<CalendarView />} />


      </Routes>
    </main>
    </div>
  );
}

export default App;
