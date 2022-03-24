import React, { useState } from 'react';
import { Container, Form, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { BiCollapse, BiPencil } from 'react-icons/bi';
import { GiMoneyStack } from 'react-icons/gi';
import { RiErrorWarningLine, RiCheckboxCircleLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { addExpenseAction } from '../actions/actions';
import { v4 as uuid} from 'uuid';

function ExpenseForm() {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory ] = useState('');
  const [error, setError] = useState(true);
  const [success, setSuccess] = useState(true);

  const dispatch = useDispatch('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };


  const options = [
    "Accomodation",
    "Food & Drink",
    "Housing & Rent",
    "Miscellaneous",
    "Transportation",
  ]

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item || !amount || !category) {
      setError(false);
      setTimeout(() => {
        setError(true);
      }, 2000);
    } else {
      let newExpense = {
        id: uuid(),
        date: new Date(),
        item: item,
        amount: amount * 1,
        category: category,
      };

      setSuccess(false);
      setTimeout(() => {
        setSuccess(true);
      }, 2000);
  
      dispatch(addExpenseAction(newExpense));
  
      setAmount('');
      setItem('');
      setCategory('');
    }
  };

  return (
    <>
      <Container>
        <h1 className='text-secondary mt-2 mb-2'>Expense Tracker</h1>
        <Form onSubmit={handleSubmit}>
        {!error ? <Alert variant='danger' className='text-center'><RiErrorWarningLine/> Some fields are empty</Alert> : '' }
        {!success ? <Alert variant='success' className='text-center'><RiCheckboxCircleLine/> Expense added</Alert> : '' }
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className='fw-bold text-success'><BiPencil /></InputGroup.Text>
            <FormControl type="text"
              value={item} onChange={handleItemChange}
              placeholder="Name Of Item"
              aria-label="name of item"
              aria-describedby="basic-addon1"
              className='text-white'
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className='fw-bold text-success'><GiMoneyStack /></InputGroup.Text>
            <FormControl type="number" 
              value={amount} onChange={handleAmountChange}
              placeholder="Amount Paid"
              aria-label="amount paid"
              aria-describedby="basic-addon1"
              className='text-white'
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className='fw-bold text-success'><BiCollapse /></InputGroup.Text>
              <Form.Select className='text-white' aria-label="Default select example" value={category} onChange={handleChange}>
                <option>Click & Select Category</option>
                {options.map((option, index) => {
                  return (
                    <option className='text-primary' key={index} value={option}>
                      {option}
                    </option>
                  )
                })}
              </Form.Select>
            </InputGroup>
            <div className='text-center'>
             <Button variant='success' type='submit' className='mb-4'>Add Expense</Button>
            </div>
        </Form>
      </Container>
    </>
  );
};

export default ExpenseForm;