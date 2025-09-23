import React, { useState } from "react";
import { useAppContext } from "../../context/appcontext";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
function Settings() {
  const {
    username,
    userEmail,
    setUsername,
    setUserEmail,
    userPassword,
    setUserPassword,
    setPaperlessUser,
  } = useAppContext();
  const navigate = useNavigate();
  // Track which field is being edited
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  // Handle update
  const handleCredentialsChange = async (field) => {
    try {
      const { data } = await axios.patch(`/home/profile/${username}`, {
        [field]: tempValue,
      });

      if (data.success) {
        toast.success(`${field} updated successfully! ✅`);

        // Update context state after patch
        if (field === "username") setUsername(tempValue);
        if (field === "email") setUserEmail(tempValue);
        if (field === "password") setUserPassword(tempValue);
      } else {
        toast.error(data.message || "Update failed ❌");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    } finally {
      setEditingField(null);
      setTempValue("");
    }
  };

  //handle logout
  const logout = async () => {
    try {
      const { data } = await axios.post("/home/logout");
      if (data.success) {
        return toast.success("logged out succesfully");
      } else {
        toast.error("error occured when logging you out");
      }
    } catch (err) {
      toast.error("error occured: " + err.message);
    } finally {
      navigate("/");
      setPaperlessUser(null); //  clear context
    }
  };
  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Settings</h1>

      {/* Profile Section */}
      <div className="mb-6">
        <h2 className="font-semibold text-gray-700 mb-2">Profile</h2>
        <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
          {/* Username */}
          <div className="flex justify-between items-center px-4 py-3">
            <span className="text-gray-600">Names</span>
            <div className="flex items-center gap-6">
              {editingField === "username" ? (
                <>
                  <input
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="border rounded px-2 py-1 text-sm"
                  />
                  <button
                    onClick={() => handleCredentialsChange("username")}
                    className="px-2 py-1 bg-green-500 text-white text-xs rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingField(null)}
                    className="px-2 py-1 bg-gray-400 text-white text-xs rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="text-gray-500 text-sm">{username}</span>
                  <button
                    onClick={() => {
                      setEditingField("username");
                      setTempValue(username);
                    }}
                    className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex justify-between items-center px-4 py-3">
            <span className="text-gray-600">Email</span>
            <div className="flex items-center gap-6">
              {editingField === "email" ? (
                <>
                  <input
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="border rounded px-2 py-1 text-sm"
                  />
                  <button
                    onClick={() => handleCredentialsChange("email")}
                    className="px-2 py-1 bg-green-500 text-white text-xs rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingField(null)}
                    className="px-2 py-1 bg-gray-400 text-white text-xs rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="text-gray-500 text-sm">{userEmail}</span>
                  <button
                    onClick={() => {
                      setEditingField("email");
                      setTempValue(userEmail);
                    }}
                    className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="flex justify-between items-center px-4 py-3">
            <span className="text-gray-600">Password</span>
            <div className="flex items-center gap-6">
              {editingField === "password" ? (
                <>
                  <input
                    type="password"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="border rounded px-2 py-1 text-sm"
                  />
                  <button
                    onClick={() => handleCredentialsChange("password")}
                    className="px-2 py-1 bg-green-500 text-white text-xs rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingField(null)}
                    className="px-2 py-1 bg-gray-400 text-white text-xs rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="text-gray-500 text-sm">********</span>
                  <button
                    onClick={() => {
                      setEditingField("password");
                      setTempValue("");
                    }}
                    className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition"
                  >
                    Change
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={() => logout()}
        className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Log out
      </button>
    </div>
  );
}

export default Settings;
