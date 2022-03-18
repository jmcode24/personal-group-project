import React from 'react';
import Group from './Expense';
import { Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';

function ExpenseList() {
  const expenses = useSelector((state) => {
    return state.expenses;
  })

  const totalExpenses = expenses.reduce((prev, cur) => (prev += cur.amount), 0);

  return (
    <>
      <Container>
        <Row>
          {expenses.length > 0 ? (
            <>
              <h4 className='text-center mt-4 mb-2 text-info'>Expenditure History</h4>
              <Table bordered hover variant='dark'>
                <thead>
                  <tr>
                    <th className='text-center text-warning'>Date</th>
                    <th className='text-center text-warning'>Item</th>
                    <th className='text-center text-warning'>Amount</th>
                    <th className='text-center text-warning'>Category</th>
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
              <h5 className='text-center mt-2 text-secondary'>Total Expenditure: <span className='text-success'>¢</span><span className='text-white'><NumberFormat displayType="text" value={totalExpenses} thousandSeparator={true} /></span></h5>
            </>
          ) : ('')}
          
        </Row>
      </Container>
    </>
  );
};

export default ExpenseList;