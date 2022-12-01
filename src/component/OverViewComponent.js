import { useState } from "react";
import TransactionForm from './TransactionForm'
const OverViewComponent = ({income,expense,addTransaction}) => {
    const [isShow,setShow]=useState(false)
    return ( 
        <>
         <div className="TopSection">
                <div>
                    Balance: {income - expense}
                </div>
                <div>
                    <button className={ `btn ${isShow && "cancel"}`}
                     onClick={()=>setShow(!isShow)}>{isShow ? "Cancel" : "ADD"}
                      </button>
                </div>
               
            </div>
            {isShow && <TransactionForm  addTransaction={addTransaction} setShow={setShow}/> }
            <div className="resultSection">
                <div className="expensebox">Expense <span>{expense} $</span></div>
                <div className="expensebox">Income <span style={{color:"green"}}>{income} $</span></div>

            </div></>
     );
}
 
export default OverViewComponent;