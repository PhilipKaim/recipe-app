import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// action generator add
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// action generator remove
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

// action generator edit
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

// action genertaor textFilter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

// action generator sort by amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// action generator sort by date
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// action generator set start date
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date,
});

// action generator set end date
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date,
});

const expensesReducerDefaultState = [];

// Expenses Reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense,
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};

const filterReducersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

// Filters Reducer
const filtersReducer = (state = filterReducersDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date,
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  }),
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense(
  { description: 'Rent', amount: 100, createdAt: -21000 }
));
const expenseTwo = store.dispatch(addExpense(
  { description: 'Coffee', amount: 300, createdAt: -1000 }
));

/*store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('re'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));*/

const demoState = {
    expenses: [{
      id: 'asdfsadgasg',
      description: 'Januarys rent',
      note: 'This is the final payment for this months rent!',
      amount: 54500,
      createdAt: 0,
    },
  ],
    filters: {
      text: 'rent',
      sortBy: 'amount', // can be amount or date
      startDate: undefined,
      endDate: undefined,
    },
  };
