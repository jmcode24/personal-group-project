import React from 'react';
import Group from './Expense';
import { Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ExpenseList() {
  const expenses = useSelector((state) => {
    return state.expenses;
  })
  return (
    <>
      <Container>
        <Row>
          {expenses.length > 0 ? (
            <>
              <h4 className='text-center mt-4 mb-2 text-info'>Expenditure Information</h4>
              <Table bordered hover variant='dark'>
                <thead>
                  <tr>
                    <th className='text-center text-warning'>Date</th>
                    <th className='text-center text-warning'>Amount</th>
                    <th className='text-center text-warning'>Item</th>
                    <th className='text-center text-warning'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {expenses.map((expense, index) => {
                  return (
                    <Group key={index} expense={expense} />
                  );
                })}
                </tbody>
              </Table>
            </>
          ) : ('')}
          
        </Row>
      </Container>
    </>
  );
};

export default ExpenseList;