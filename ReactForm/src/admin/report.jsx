import { BarChart3, TrendingUp, Users, DollarSign, Download } from "lucide-react";

export default function Report() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-indigo-600" /> Analytics Report
        </h1>
        <button className="flex items-center gap-2 bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm hover:bg-gray-800">
          <Download className="w-4 h-4" /> Export PDF
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white border rounded-xl shadow-sm">
          <div className="flex justify-between items-center text-gray-500 text-sm">
            Total Revenue
            <DollarSign className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-2">$24,500</p>
          <span className="text-xs text-green-600 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> +12% this month
          </span>
        </div>

        <div className="p-4 bg-white border rounded-xl shadow-sm">
          <div className="flex justify-between items-center text-gray-500 text-sm">
            New Users
            <Users className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-2">+1,240</p>
          <span className="text-xs text-green-600 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> +8% this month
          </span>
        </div>

        <div className="p-4 bg-white border rounded-xl shadow-sm">
          <div className="flex justify-between items-center text-gray-500 text-sm">
            Recycled Materials
            <BarChart3 className="w-4 h-4 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-2">18.5 Tons</p>
          <span className="text-xs text-green-600 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> +15% this month
          </span>
        </div>
      </div>
    </div>
  );
}