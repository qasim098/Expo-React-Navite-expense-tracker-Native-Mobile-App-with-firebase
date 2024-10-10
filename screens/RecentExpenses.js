import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchexpences } from '../util/http';
import Loderspiner from '../components/UI/loderspiner';

function RecentExpenses() {
  const [isfetching,setisfetching]=useState(true);
const expensesCtx=useContext(ExpensesContext)
useEffect(()=>{
  async function getexpences(){
    setisfetching(true);
    const expences=await fetchexpences();
    setisfetching(false);
    expensesCtx.setExpences(expences);
  }
  getexpences();
},[])
if(isfetching){
 return <Loderspiner/>
}
  const recentExpenses =expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
