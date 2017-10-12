
// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
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
