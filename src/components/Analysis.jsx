import { useState } from 'react';
import Charts from './Charts.jsx';
import { useContext } from 'react';

const Analysis = ({ columnLabels, data, totalBudget }) => {
  const [activeTab, setActiveTab] = useState('analysis');

  // Calculate actual budget data
  const calculateBudgetData = () => {
    // Calculate expenses per category
    const categoryExpenses = columnLabels?.map((label, colIndex) => {
      let sum = 0;
      for (let r = 0; r < data?.length; r++) {
        const row = data[r] || [];
        const cell = row[colIndex];
        const raw = cell && typeof cell === "object" && "value" in cell ? cell.value : cell;
        const num = parseFloat((raw || "").toString().replace(/[^0-9.-]+/g, ""));
        if (!isNaN(num)) sum += num;
      }
      return { name: label, amount: sum };
    }) || [];

    // Calculate total expenses
    const totalExpenses = categoryExpenses.reduce((sum, cat) => sum + cat.amount, 0);

    // Find category with maximum expenses
    const maxCategory = categoryExpenses.reduce((max, cat) => 
      cat.amount > (max?.amount || 0) ? cat : max
    , categoryExpenses[0]);

    return {
      totalBudget: totalBudget || 0,
      remainingBudget: (totalBudget || 0) - totalExpenses,
      maxCategory: maxCategory || { name: 'None', amount: 0 }
    };
  };

  const budgetData = calculateBudgetData();

  const AnalysisCard = ({ title, value, subtitle }) => (
    <div className="bg-linear-to-br from-green-100 to-blue-100 p-6 rounded-xl">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mb-1">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </p>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </div>
  );

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Budget Analyses</h2>
      <div className="mb-6">
        <div className="text-center rounded-lg m-2.5 p-1">
          <button
            className={`px-4 py-2 mr-5 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'analysis'
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab('analysis')}
          >
            Analysis
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'graph'
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab('graph')}
          >
            Graph
          </button>
        </div>
      </div>

      {activeTab === 'analysis' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnalysisCard
            title="Total Budget"
            value={budgetData.totalBudget}
            subtitle="Your total allocated budget"
          />
          <AnalysisCard
            title="Remaining Budget"
            value={budgetData.remainingBudget}
            subtitle="Amount left to spend"
          />
          <AnalysisCard
            title="Highest Spending Category"
            value={budgetData.maxCategory.name}
            subtitle={`${budgetData.maxCategory.amount.toLocaleString()} spent`}
          />
        </div>
      ) : (
        <div className="bg-white/50 rounded-2xl p-6">
          <Charts 
            columnLabels={columnLabels}
            data={data}
            totalBudget={totalBudget}
          />
        </div>
      )}
    </div>
  );
};

export default Analysis;
