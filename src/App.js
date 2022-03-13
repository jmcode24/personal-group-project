import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md='4'> <ExpenseForm /> </Col>
          <Col md='8'> <ExpenseList /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
