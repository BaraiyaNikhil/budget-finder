import React from "react";
import Spreadsheet from "react-spreadsheet";

export default function GridBook({
  columnLabels,
  data,
  setData,
  handleAddRow,
  handleDeleteRow,
  totalBudget,
  setTotalBudget,
}) {
  return (
    <section>
      <form
        className="mb-4 flex flex-col sm:flex-row items-center justify-center gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="budget" className="font-semibold">
          Total Budget:
        </label>
        <input
          id="budget"
          name="budget"
          type="number"
          min="0"
          step="0.01"
          value={totalBudget ?? ""}
          onChange={(e) => setTotalBudget(Number(e.target.value) || 0)}
          className="sm:w-48 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
          placeholder="Enter total budget"
        />
      </form>
      <div id="sheet_wrapper" className="w-full overflow-auto">
        <div
          id="sheet_container"
          className="overflow-auto text-center rounded-2xl max-w-full min-w-48"
        >
        <Spreadsheet
          data={data}
          columnLabels={columnLabels}
          onChange={setData}
        />
        </div>
      </div>
      <div id="btns" className="my-5 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            className="text-lg sm:text-xl font-semibold px-5 py-3 bg-green-400 text-white rounded-2xl"
            onClick={() => handleAddRow()}
          >
            Add Row
          </button>
          <button
            className="text-lg sm:text-xl font-semibold px-5 py-3 bg-red-400 text-white rounded-2xl"
            onClick={() => handleDeleteRow()}
          >
            Delete Row
          </button>
        </div>
      </div>
    </section>
  );
}
