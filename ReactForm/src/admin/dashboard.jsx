import { Outlet, Link } from "react-router";
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  Settings as SettingsIcon, 
  Bell, 
  TrendingUp, 
  DollarSign, 
  Package, 
  FileText 
} from "lucide-react";

// 🔹 ১. ড্যাশবোর্ডের মূল হোম/ওভারভিউ কন্টেন্ট (আলাদা কম্পোনেন্ট)
export function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* স্ট্যাটস কার্ডস (Stats Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Sales</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">$12,450</h3>
            <span className="text-xs text-green-600 flex items-center gap-1 mt-1 font-medium">
              <TrendingUp size={12} /> +12% this week
            </span>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <DollarSign size={24} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">New Orders</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">142</h3>
            <span className="text-xs text-green-600 flex items-center gap-1 mt-1 font-medium">
              <TrendingUp size={12} /> +5% today
            </span>
          </div>
          <div className="p-3 bg-green-50 text-green-600 rounded-lg">
            <ShoppingBag size={24} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Users</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">1,280</h3>
            <span className="text-xs text-green-600 flex items-center gap-1 mt-1 font-medium">
              <TrendingUp size={12} /> +18% this month
            </span>
          </div>
          <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
            <Users size={24} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Products in Stock</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">85</h3>
            <span className="text-xs text-gray-500 mt-1 block">5 categories</span>
          </div>
          <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
            <Package size={24} />
          </div>
        </div>
      </div>

      {/* রিসেন্ট অর্ডারস টেবিল */}
      <div className="bg-white border rounded-xl shadow-sm p-5">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-sm text-gray-500 bg-gray-50">
                <th className="p-3 font-medium">Customer</th>
                <th className="p-3 font-medium">Product</th>
                <th className="p-3 font-medium">Amount</th>
                <th className="p-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm text-gray-700">
              <tr>
                <td className="p-3 font-medium">Rahim Ahmed</td>
                <td className="p-3">Recycled Plastic Granules</td>
                <td className="p-3 font-semibold">$1,200</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-semibold">Completed</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Karim Islam</td>
                <td className="p-3">Industrial PVC Waste</td>
                <td className="p-3 font-semibold">$850</td>
                <td className="p-3">
                  <span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-full text-xs font-semibold">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 🔹 ২. মূল লেআউট কম্পোনেন্ট
export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* সাইডবার */}
      <aside className="w-64 bg-slate-900 text-white p-5 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="text-xl font-bold tracking-wider text-blue-400 mb-8">
            RK ADMIN
          </div>
          <nav className="space-y-2">
            <Link to="/admin" className="flex items-center gap-3 text-slate-300 hover:bg-slate-800 px-4 py-2.5 rounded-lg text-sm font-medium">
              <LayoutDashboard size={18} /> Dashboard
            </Link>
            <Link to="/admin/report" className="flex items-center gap-3 text-slate-300 hover:bg-slate-800 px-4 py-2.5 rounded-lg text-sm font-medium">
              <FileText size={18} /> Report
            </Link>
            <Link to="/admin/setting" className="flex items-center gap-3 text-slate-300 hover:bg-slate-800 px-4 py-2.5 rounded-lg text-sm font-medium">
              <SettingsIcon size={18} /> Settings
            </Link>
          </nav>
        </div>
      </aside>

      {/* মেইন কন্টেন্ট এরিয়া */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
          <div className="flex items-center gap-2">
            <Bell size={20} className="text-gray-600" />
          </div>
        </header>

        <main className="p-6">
          {/* 🔴 এখানে ডাইনামিকভাবে পেজগুলো সুইচ করবে */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}