import React from "react";

function Settings() {
  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Settings</h1>

      {/* Placeholder for the image */}
      <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
        <p className="text-gray-400 text-sm">Lorem ipsum placeholder</p>
      </div>

      {/* General Section */}
      <div className="mb-6">
        <h2 className="font-semibold text-gray-700 mb-2">General</h2>
        <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
          <span className="text-gray-500">Notifications</span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="relative w-10 h-5 bg-gray-300 peer-checked:bg-blue-500 rounded-full transition">
              <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full peer-checked:translate-x-5 transition" />
            </div>
          </label>
        </div>
      </div>

      {/* Profile Section */}
      <div className="mb-6">
        <h2 className="font-semibold text-gray-700 mb-2">Profile</h2>
        <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
          {/* Name */}
          <div className="flex justify-between items-center px-4 py-3">
            <span className="text-gray-600">Names</span>
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-sm">Kelvin Kariuki</span>
              <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition">
                Edit
              </button>
            </div>
          </div>
          {/* Email */}
          <div className="flex justify-between items-center px-4 py-3">
            <span className="text-gray-600">Email</span>
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-sm">Kelvin@gmail.ai</span>
              <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition">
                Edit
              </button>
            </div>
          </div>
          {/* Password */}
          <div className="flex justify-between items-center px-4 py-3">
            <span className="text-gray-600">Password</span>
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-sm">********</span>
              <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition">
                Change
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
        Log out
      </button>
    </div>
  );
}

export default Settings;
