import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
    {
      /*  <div className="container">
        <h1>Todo List</h1>
        <form>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="success">Success</Button>
          </InputGroup>

          <Button variant="success">Remove All</Button>
        </form>
      </div>*/
  }
  <TodoList/>
    </div>
  );
}

export default App;
