// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <div className="container">
        <header>
            <h2>Expense Tracker</h2>
        </header>
        <div className="your-balance-container">
            <p className="balance-word">Your Balance</p>
            <p className="balance-figure">₦0</p>
        </div>
        <div className="income-expense-container">
            <div className="income-container">
                <p className="income-word">income</p>
                <p className="income-figure">₦0</p>
            </div>
            <div className="line"></div>
            <div className="Expense-container">
                <p className="Expense-word">expense</p>
                <p className="Expense-figure">₦0</p>
            </div>
        </div>
        <div className="history-container" >
            <h3>History</h3>
            <hr/>
           <ul className="debit-ul" style={{overflow:"hidden"}}>
                {/* <!-- <li class="debit">
                   <p>Flower</p>
                   <p>-₦5,000</p>
               </li>
               <li class="credit">
                   <p>Salary</p>
                   <p>+₦400,000</p>
                </li>
               <li class="debit">
                   <p>Book</p>
                   <p>-₦1,000</p>
                </li>
               <li class="credit">
                   <p>Camera</p>
                   <p>+₦150,000</p>
                </li> --> */}
           </ul>
        </div>
        <div className="transaction-container">
            <h3>Add new transaction</h3>
            <hr/>
            <form action="">
                <label for="text">Text</label><br/>
                <input type="text" name="text" placeholder="Enter text..." className="text"/><br/>
                <br/>
                <label for="amount" className="amount-name">Amount<br/>(negative-expense,positive-income)</label><br/>
                <input type="number" name="amount" placeholder="0" className="amount"/><br/>
                <p className="insufficent-fund">insufficent fund</p>
                <button type="button">Add transaction</button>
              </form>
          </div>
       </div>
    </div>
  );
}

export default App;