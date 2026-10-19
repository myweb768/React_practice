import { User, Bell, Lock, Save } from "lucide-react";

export default function Settings() {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Account Settings</h1>

      {/* Profile Section */}
      <div className="p-4 bg-white border rounded-xl shadow-sm space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
          <User className="w-5 h-5 text-blue-500" /> Profile Information
        </h2>
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-600 block mb-1">Name</label>
            <input 
              type="text" 
              defaultValue="John Doe" 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 block mb-1">Email</label>
            <input 
              type="email" 
              defaultValue="john@example.com" 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="p-4 bg-white border rounded-xl shadow-sm space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
          <Bell className="w-5 h-5 text-yellow-500" /> Notifications
        </h2>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Email Notifications</span>
          <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
        </div>
      </div>

      {/* Save Button */}
      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        <Save className="w-4 h-4" /> Save Changes
      </button>
    </div>
  );
}