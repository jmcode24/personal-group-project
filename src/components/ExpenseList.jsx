import React from 'react';
import Group from './Expense';
import { Container, Row } from 'react-bootstrap';

function ExpenseList() {
  return (
    <>
      <Container>
        <Row>
        <h4 className='text-center mt-4 mb-2'>Your Expense Information</h4>
          <Group />
        </Row>
      </Container>
    </>
  );
};

export default ExpenseList;