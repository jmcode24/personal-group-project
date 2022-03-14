import React, { useState } from 'react';
import { Container, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaAnchor } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addExpenseAction } from '../actions/actions';
import { v4 as uuid} from 'uuid';

function ExpenseForm() {
  const [amount, setAmount] = useState('');
  const [item, setItem ] = useState('');

  const dispatch = useDispatch('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
  };


  const options = [
    "Accomodation",
    "Transportation",
    "Housing & Rent",
    "Miscellaneous"
  ]

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newExpense = {
      id: uuid(),
      date: new Date(),
      amount: amount,
      item: item,
    };

    dispatch(addExpenseAction(newExpense));

    setAmount('');
    setItem('');
  };

  return (
    <>
      <Container>
        <h1 className='text-secondary mt-2 mb-2'>Expense Tracker</h1>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className='fw-bold text-success'>₵</InputGroup.Text>
            <FormControl type="number" required
              value={amount} onChange={handleAmountChange}
              placeholder="Amount Paid"
              aria-label="amount spent"
              aria-describedby="basic-addon1"
              className='text-white'
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className='fw-bold text-success'><FaAnchor /></InputGroup.Text>
              <Form.Select className='text-white' required aria-label="Default select example" onChange={handleChange}>
                <option value={item}>Click & Select</option>
                {options.map((option, index) => {
                  return (
                    <option className='text-primary' key={index} value={option}>
                      {option}
                    </option>
                  )
                })}
              </Form.Select>
            </InputGroup>
            <div className='text-center mt-2'>
             <Button variant='success' type='submit'>Check Expenditure</Button>
            </div>
        </Form>
      </Container>
    </>
  );
};

export default ExpenseForm;