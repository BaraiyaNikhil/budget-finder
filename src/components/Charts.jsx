import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Charts.jsx
// Shows expenses per category and a per-category budget using Recharts.
// Assumption: if a total budget is provided, budget is split evenly across categories.

export default function Charts({ columnLabels = [], data = [], totalBudget = 0 }) {
  // compute expense totals per column
  const chartData = columnLabels.map((label, colIndex) => {
    let sum = 0;
    for (let r = 0; r < data.length; r++) {
      const row = data[r] || [];
      const cell = row[colIndex];
      // spreadsheet cells are objects like { value: "..." }
      const raw = cell && typeof cell === "object" && "value" in cell ? cell.value : cell;
      const num = parseFloat((raw || "").toString().replace(/[^0-9.-]+/g, ""));
      if (!isNaN(num)) sum += num;
    }
    return { name: label, Expense: Number(sum.toFixed(2)) };
  });

  const totalExpenses = chartData.reduce((s, c) => s + (c.Expense || 0), 0);
  const perCategoryBudget = columnLabels.length > 0 ? totalBudget / columnLabels.length : 0;

  // attach Budget to each category (even split assumption)
  const dataWithBudget = chartData.map((d) => ({ ...d, Budget: Number(perCategoryBudget.toFixed(2)) }));

  return (
    <div className="w-full bg-white rounded-2xl p-4 shadow">
      <h3 className="text-lg font-semibold mb-2">Expenses vs Budget</h3>
      <div className="w-full">
        <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
          <ResponsiveContainer className={"w-full h-full"}>
            <BarChart data={dataWithBudget} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Legend />
              <Bar dataKey="Expense" fill="#ef4444" />
              <Bar dataKey="Budget" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-3 text-sm space-y-1">
        <div>
          Total Expenses: <span className="font-semibold">{totalExpenses}</span>
        </div>
        <div>
          Total Budget: <span className="font-semibold">{Number(totalBudget) || 0}</span>
        </div>
        <div>
          Remaining: <span className="font-semibold">{(Number(totalBudget) || 0) - totalExpenses}</span>
        </div>
      </div>
    </div>
  );
}
