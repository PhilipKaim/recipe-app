import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should set up edit action object', () => {
  const action = editExpense('1234', { note: 'new note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234',
    updates: { note: 'new note value' },
  });
});

test('should set up add action object', () => {
  const expenseData = {
    description: 'rent',
    note: 'rent that is due',
    amount: 109500,
    createdAt: 1000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('should set up default add action object', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
