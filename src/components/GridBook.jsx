import { section } from "motion/react-client";
import React from "react";
import Spreadsheet from "react-spreadsheet";

export default function GridBook({
  columnLabels,
  data,
  setData,
  handleAddRow,
  handleDeleteRow,
}) {
  return (
    <section>
      <div id="sheet_container" className="overflow-auto text-center rounded-2xl">
        <Spreadsheet
          data={data}
          columnLabels={columnLabels}
          onChange={setData}
        />
      </div>
      <div id="btns" className="my-5 text-center">
        <button
          className="text-xl font-semibold px-5 py-3 mr-5 bg-green-400 text-white rounded-2xl"
          onClick={() => handleAddRow()}
        >
          Add Row
        </button>
        <button
          className="text-xl font-semibold px-5 py-3 bg-red-400 text-white rounded-2xl"
          onClick={() => handleDeleteRow()}
        >
          Delete Row
        </button>
      </div>
    </section>
  );
}
