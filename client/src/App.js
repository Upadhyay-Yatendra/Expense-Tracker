import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className="first-row">
          <Balance />
          <IncomeExpenses />
        </div>
        <div className="second-row">
          <TransactionList />
        </div>
        <div className="second-column">
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
