import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toBe({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})