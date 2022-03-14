import React, {useState} from 'react';
import moment from 'moment';
import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { delExpenseAction, editExpenseAction } from '../actions/actions';
import { BiCollapse, BiPencil  } from 'react-icons/bi';
import { GiMoneyStack } from 'react-icons/gi';

function Expense(props) {
  const expense = props.expense;
  const dispatch = useDispatch('');

  const handleDelete = () => {
    dispatch(delExpenseAction(expense.id));
  };

  const [item, setItem] = useState(expense.item)
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory ] = useState(expense.category);
  const [isShowing, setIsShowing] = useState(false);

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleShowing = () => {
    setIsShowing(true);
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

  const handleSubmit = () => {
    let expenseData = {
      date: new Date(),
      id: expense.id,
      item: item,
      amount: amount,
      category: category,
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
        <td className='text-center'>{moment(expense.date).format('MMMM,Do-YY')}</td>
        <td className='text-center'>{expense.item}</td>
        <td className='text-center'>{expense.amount}</td>
        <td className='text-center'>{expense.category}</td>
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
            <InputGroup.Text id="basic-addon1" className='fw-bold text-success'><BiPencil /></InputGroup.Text>
            <FormControl type="text" required
              value={item} onChange={handleItemChange}
              placeholder="Item Bought"
              aria-label="name of item"
              aria-describedby="basic-addon1"
              className='text-white'
            />
          </InputGroup>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className='fw-bold text-success'><GiMoneyStack /></InputGroup.Text>
        <FormControl type="number" required
          value={amount} onChange={handleAmountChange}
          placeholder="Amount Spent"
          aria-label="amount spent"
          aria-describedby="basic-addon1"
          className='text-white'
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className='fw-bold text-success'><BiCollapse /></InputGroup.Text>
          <Form.Select className='text-white' required aria-label="Default select example" value={category} onChange={handleChange}>
            <option>Click & Select</option>
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