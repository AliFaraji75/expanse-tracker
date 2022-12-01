import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransactionComponent from "./TransactionComponent";

const ExpanseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);
  const addTransaction = (formValues) => {
    setTransaction([...transaction, { ...formValues, id: Date.now() }]);
    
    //console.log(transaction);
  };
  useEffect(()=>{
  let exp=0;
  let inc=0;
  transaction.forEach(t=> t.type==="expense" ?( exp =exp + parseFloat(t.amount)):(inc=inc+parseFloat(t.amount)))
  console.log(expense);
  setExpense(exp);
  setIncome(inc)
  },[transaction])
  return (
    <section className="container">
      <OverViewComponent
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
   
      <TransactionComponent transaction={transaction} />
    </section>
  );
};

export default ExpanseApp;
