import React, { useState } from "react";
import GridBook from "../components/GridBook";
import Charts from "../components/Charts";

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
  const [totalBudget, setTotalBudget] = useState();

  function handleAddRow() {
    setExpenseData((prev) => [
      ...prev,
      Array.from({ length: columnLabels.length }, () => ({ value: "" })),
    ]);
  }

  function handleDeleteRow() {
    setExpenseData((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
  }

  return (
    <div className="min-h-screen px-4 py-8 box-border bg-[#71BC20]/5">
      <div className="w-full max-w-6xl mx-auto">
        <GridBook
          columnLabels={columnLabels}
          data={expenseData}
          setData={setExpenseData}
          handleAddRow={handleAddRow}
          handleDeleteRow={handleDeleteRow}
          totalBudget={totalBudget}
          setTotalBudget={setTotalBudget}
        />

        {/* removed h-full here — it can produce zero-height if parent has no explicit height */}
        <div className="mt-8 w-full">
          <Charts
            columnLabels={columnLabels}
            data={expenseData}
            totalBudget={totalBudget}
          />
        </div>
      </div>
    </div>
  );
}

export default BudgetMaker;
