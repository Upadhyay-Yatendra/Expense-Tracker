import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [isExpense, setIsExpense] = useState(false); // Initially set as an expense
  const [isIncome, setIsIncome] = useState(false); // Initially set as an expense

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    // Determine the sign of the amount based on isExpense
    const transactionAmount = isExpense ? -Math.abs(amount) : Math.abs(amount);
    console.log('transaction amount->',transactionAmount);

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: transactionAmount,
    };

    addTransaction(newTransaction);

    // Reset the form fields
    setText("");
    setAmount(0);
     // Set isExpense to false after adding the transaction
     setIsExpense(false);
     setIsIncome(false);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={Math.abs(amount)} // Display the absolute value
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          <button
            type="button" // Add this line
            className={`expense-button ${isExpense ? "active" : ""}`}
            onClick={() => setIsExpense(true)}
          >
            Expense
          </button>
          <button
            type="button" // Add this line
            className={`income-button ${isIncome ? "active" : ""}`}
            onClick={() => setIsIncome(true)}
          >
            Income
          </button>
        </div>

        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
};
