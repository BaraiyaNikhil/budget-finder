import React, { useState } from "react";
import GridBook from "../components/GridBook";

function createEmptyGrid(rows = 10, cols = 5) {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ value: "" }))
  );
}

function BudgetMaker() {
  const columnLabels = ["Rent", "Food", "Home", "Personal", "Misc."];
  const [expenseData, setExpenseData] = useState(() =>
    createEmptyGrid(10, columnLabels.length)
  );

  function handleAddRow() {
    setExpenseData((prev) => [
      ...prev,
      Array.from({ length: columnLabels.length }, () => ({ value: "" })),
    ]);
  }

  // remove last row safely (no mutation)
  function handleDeleteRow() {
    setExpenseData((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
  }

  console.log(expenseData)

  return (
    <div className="min-h-screen px-5 py-10 box-border bg-[#71BC20]/5">
      <GridBook
        columnLabels={columnLabels}
        data={expenseData}
        setData={setExpenseData}
        handleAddRow={handleAddRow}
        handleDeleteRow={handleDeleteRow}
      />
    </div>
  );
}

export default BudgetMaker;
