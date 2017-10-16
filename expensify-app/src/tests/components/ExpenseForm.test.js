import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
})

// should render ExpenseForm with expense data
test('should render ExpenseForm with expenses', () => {
  const wrapper = shallow(<ExpenseForm expenses={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form subumission', () => {
  const wrapper = shallow(<ExpenseForm expenses={expenses[1]} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
})


test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm  />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value);
})

test('Should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)

  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})
