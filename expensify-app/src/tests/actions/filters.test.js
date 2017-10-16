import * as filters from '../../actions/filters';

test('should set the textFilter', () => {
  const action = filters.setTextFilter('bill');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  })
})
