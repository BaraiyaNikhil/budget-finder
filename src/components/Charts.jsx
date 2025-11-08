import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6052'];

export default function Charts({
  columnLabels = [],
  data = [],
  totalBudget = 0,
}) {
  // guard against SSR / initial zero-size render
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // compute expense totals per column
  const chartData = columnLabels.map((label, colIndex) => {
    let sum = 0;
    for (let r = 0; r < data.length; r++) {
      const row = data[r] || [];
      const cell = row[colIndex];
      const raw =
        cell && typeof cell === "object" && "value" in cell ? cell.value : cell;
      const num = parseFloat((raw || "").toString().replace(/[^0-9.-]+/g, ""));
      if (!isNaN(num)) sum += num;
    }
    return { name: label, Expense: Number(sum.toFixed(2)) };
  });

  const totalExpenses = chartData.reduce((s, c) => s + (c.Expense || 0), 0);
  const perCategoryBudget =
    columnLabels.length > 0 ? totalBudget / columnLabels.length : 0;

  const dataWithBudget = chartData.map((d) => ({
    ...d,
    Budget: Number(perCategoryBudget.toFixed(2)),
  }));

  return (
    <div className="w-full bg-white rounded-2xl p-4 shadow">
      <h3 className="text-lg font-semibold mb-2">Expenses vs Budget</h3>
      <div className="w-full">
        {/* ensure wrapper has concrete height (tailwind h-64 etc) and cannot collapse */}
        <div
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96"
          style={{ minWidth: 0, minHeight: 0 }}
        >
          {/* render chart only after mount and rely on wrapper size */}
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={dataWithBudget}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                <Bar dataKey="Expense" fill="#ef4444" />
                <Bar dataKey="Budget" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-full" />
          )}
        </div>

        <div
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 mt-5"
          style={{ maxWidth: "500px", margin: "0 auto", minWidth: 0, minHeight: 0 }}
        >
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataWithBudget}
                  dataKey="Expense"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="75%"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {dataWithBudget.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-full" />
          )}
        </div>
      </div>

      <div className="mt-3 text-sm space-y-1">
        <div>
          Total Expenses: <span className="font-semibold">{totalExpenses}</span>
        </div>
        <div>
          Total Budget:{" "}
          <span className="font-semibold">{Number(totalBudget) || 0}</span>
        </div>
        <div>
          Remaining:{" "}
          <span className="font-semibold">
            {(Number(totalBudget) || 0) - totalExpenses}
          </span>
        </div>
      </div>
    </div>
  );
}
