import { useState } from "react";

const TransactionForm = ({addTransaction,setShow}) => {
  const [formValues, setFormValues] = useState({
    desc: "",
    type: "expense",
    amount: 0,
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if(e.target.desc.value==="") return alert("please enter describtion ....")
    addTransaction(formValues)
    setShow(false)
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="inputValue">
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
        placeholder="enter transaction ..."
      ></input>
      <input
        type="number"
        name="amount"
        min="1"
        onChange={changeHandler}
        value={formValues.amount}
      ></input>
      </div>
     
      <div >
        <input
          type="radio"
          name="type"
          value="expense"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
          
        />
        <label >   Expense</label>
        <input
          type="radio"
          name="type"
          value="income"
          onChange={changeHandler}
          checked={formValues.type === "income"}
          style={{margin:"0 0 0 15px"}}
     
        />
        <label>  Income</label>
        </div>
        <button type="submit">Onsubmit</button>
     
    </form>
  );
};

export default TransactionForm;
