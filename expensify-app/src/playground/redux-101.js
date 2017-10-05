import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
  });

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
  });

const setCount = ({ setBy = 1 } = {}) => ({
    type: 'SET',
    setBy
  });

const resetCount = () => ({
    type: 'RESET',
  });

// Reducers
// 1. Reducers are pure functions - they only use things inside the functions
// And they don't change things outside of its scope
// 2. Never change state or action

const countReducer = (state = { count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.setBy
      }
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore();

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});



// Actions - an object that gets sent to the store
// Dispatch sends an action to the store
store.dispatch(incrementCount({ incrementBy: 5}))
store.dispatch(decrementCount({ decrementBy: 10}))
store.dispatch(setCount({ setBy: 100}))
store.dispatch(resetCount())




unsubscribe();
