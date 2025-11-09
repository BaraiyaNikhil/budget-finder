import React, { useState } from "react";
import GridBook from "../components/GridBook";
import Analysis from "../components/Analysis";

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
    <div className="min-h-screen box-border bg-gray-50">
      {/* Header */}
      <div className="w-full bg-white shadow-sm px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Budget Builder</h1>
        <button 
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-colors"
          onClick={() => window.location.href = '/'}
        >
          End Session
        </button>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
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
          <Analysis
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
