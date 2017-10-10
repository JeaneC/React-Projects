import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE Action Generator
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
   } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

// REMOVE_EXPNSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

//editExpense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

//CombineReducers - allows you to create smaller functions and combine them together
//Combine multiple reducers to create a single store

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.id; //Keeps all items that are not equal to the id
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      })
    default:
      return state;
  }
}


//FilterReducers
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: 'date'
      }
    default:
      return state
  }
}




// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {

    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    //we first check if the value is defined if it is undefined then we have a true statement
    //which is fine since that means we don't want to sort by date
    //If it is defined, then that statement becomes false, and we know check for a truth
    //value on whether or not the expense was created at or after the startDate

    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    //similar logic for above

    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    //we check if the description contains the textVariable stirng

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=> {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
      // 1 means it is greater, -1 means it is less
      // since we want our most expensive at the top,
      // we reverse this since -1, would make the later ones appear first
    }

    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1: -1;
    }
    //similar logic

  });
;}
// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

  console.log(visibleExpenses)
  // console.log(state)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));



// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
//
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));
//
store.dispatch(sortByAmount());
// store.dispatch(sortByDate())

store.dispatch(setStartDate(0));
store.dispatch(setEndDate(1250));
// store.dispatch(setStartDate());


const demoState = {
  expenses: [{
    id: 'agagag',
    description: 'October Rent',
    note: 'This was teh final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
