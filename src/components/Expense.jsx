import React, {useState} from 'react';
import moment from 'moment';
import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { delExpenseAction, editExpenseAction } from '../actions/actions';
import { FaAnchor } from 'react-icons/fa';

function Expense(props) {
  const expense = props.expense;
  const dispatch = useDispatch('');

  const handleDelete = () => {
    dispatch(delExpenseAction(expense.id));
  };

  const [amount, setAmount] = useState('');
  const [item, setItem ] = useState('');

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

  const [isShowing, setIsShowing] = useState(false);

  const handleShowing = () => {
    setIsShowing(true);
  };

  const handleSubmit = () => {
    let expenseData = {
      date: new Date(),
      id: expense.id,
      amount: amount,
      item: item,
    }

    dispatch(editExpenseAction(expense.id, expenseData));

    handleClose();
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <tr>
        <td className='text-center'>{moment(expense.date).format('ddd, MMM Do YYYY')}</td>
        <td className='text-center'>{expense.amount}</td>
        <td className='text-center'>{expense.item}</td>
        <td>
          <div className='d-flex justify-content-around'>
            <Button variant='primary' onClick={handleShowing}>Edit</Button>
            <Button variant='danger' onClick={handleDelete}>Delete</Button>
          </div>
        </td>
      </tr>

      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Expenditure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className='fw-bold text-success'>₵</InputGroup.Text>
        <FormControl type="number" required
          value={amount} onChange={handleAmountChange}
          placeholder="Amount Spent"
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Expense;