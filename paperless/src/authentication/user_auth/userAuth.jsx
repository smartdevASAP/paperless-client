import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets_config";
import { useAppContext } from "../../context/appcontext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function UserAuth() {
  // Consuming context
  const {
    username,
    setUsername,
    appMode,
    setAppMode,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    user,
    setUser,
    paperlessUser,
    setPaperlessUser,
  } = useAppContext();

  // Local login state
  const [loggingEmail, setLoggingEmail] = useState("");
  const [loggingPassword, setLoggingPassword] = useState("");

  // UI/loading state
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const navigate = useNavigate();

  // Reset state on mount
  useEffect(() => {
    setAppMode(false);
    setUser("unauthorised");
  }, []);

  // --- Create Account ---
  const creatingAcc = async () => {
    setLoadingCreate(true);

    console.log("Creating account...", { username, userEmail, userPassword });

    try {
      const { data } = await axios.post("/home/signin", {
        username,
        email: userEmail,
        password: userPassword,
      });

      if (data.success) {
        setPaperlessUser(data.user);
        navigate("/user-dashboard/dashHome");
      } else {
        toast.error(data.message || "Account creation failed");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    } finally {
      setLoadingCreate(false);
    }
  };

  // --- Login ---
  const loggingIn = async () => {
    setLoadingLogin(true);
    console.log("Logging in...", { loggingEmail, loggingPassword });

    try {
      const { data } = await axios.post("/home/login", {
        email: loggingEmail,
        password: loggingPassword,
      });

      if (data.success) {
        setPaperlessUser(data.user);
        navigate("/user-dashboard/dashHome");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
      console.error("Error when logging in:", err);
    } finally {
      setLoadingLogin(false);
    }
  };

  // --- Forgot Password ---
  const forgotPassword = () => {
    toast.error("Cannot change password, please try again later");
  };

  return (
    <div className="p-2 md:p-4">
      <Link to="/">
        <img src={assets.logo} alt="logo" />
      </Link>

      <div className="md:flex p-2 w-[90vw] mx-auto space-y-4 mt-12 justify-between">
        <div>
          {user === "unauthorised" ? (
            // ----------------- SIGNUP -----------------
            <div>
              <h1 className="font-bold text-gray-600 md:text-xl text-2xl">
                Create A Paperless Account
              </h1>
              <p className="text-xs text-gray-500 mt-4 mb-8">
                Welcome to Paperless 👋 Your documents are safe, secure, and
                just a click away.
              </p>

              <div className="w-full">
                <div>
                  <p className="text-sm text-gray-500">Username</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    // value={username}
                    className="block mb-6 w-full text-gray-700 border rounded p-2 border-gray-200"
                    type="text"
                    placeholder="Charity"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <input
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="block mb-6 w-full text-gray-700 border rounded p-2 border-gray-200"
                    type="email"
                    placeholder="charity@gmail.com"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Password</p>
                  <input
                    onChange={(e) => setUserPassword(e.target.value)}
                    className="block mb-6 w-full text-gray-700 border rounded p-2 border-gray-200"
                    type="password"
                    placeholder="***********"
                  />
                </div>
              </div>

              <button
                onClick={creatingAcc}
                disabled={loadingCreate}
                className="p-2 w-full bg-blue-500 mt-8 mb-8 rounded-sm shadow-sm text-white text-center"
              >
                {loadingCreate ? (
                  <span className="loader border-2 border-white border-t-transparent w-5 h-5 rounded-full animate-spin inline-block"></span>
                ) : (
                  "Create Account"
                )}
              </button>

              <p className="text-gray-500 text-xs">
                Already have an account?{" "}
                <a
                  className="underline text-blue-500 cursor-pointer"
                  onClick={(e) => {
                    setUser("authorised");
                    e.preventDefault();
                  }}
                >
                  Click here to log in
                </a>
              </p>
            </div>
          ) : (
            // ----------------- LOGIN -----------------
            <div>
              <h1 className="font-bold text-gray-600 md:text-xl text-2xl">
                Hello 👋 Welcome back to Paperless
              </h1>
              <p className="text-xs text-gray-500 mt-4 mb-8">
                Your documents are safe, secure, and just a click away.
              </p>

              <div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <input
                    onChange={(e) => setLoggingEmail(e.target.value)}
                    value={loggingEmail}
                    className="block mb-6 w-full text-gray-700 border rounded p-2 border-gray-200"
                    type="email"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Password</p>
                  <input
                    value={loggingPassword}
                    onChange={(e) => setLoggingPassword(e.target.value)}
                    className="block mb-6 w-full text-gray-700 border rounded p-2 border-gray-200"
                    type="password"
                    placeholder="***********"
                  />
                </div>
                <div className="flex justify-between">
                  <div />
                  <p
                    className="text-xs hover:cursor-pointer text-gray-600"
                    onClick={forgotPassword}
                  >
                    Forgot password?
                  </p>
                </div>
              </div>

              <button
                onClick={loggingIn}
                disabled={loadingLogin}
                className="p-2 w-full bg-blue-500 mt-8 mb-8 rounded-sm shadow-sm text-white text-center"
              >
                {loadingLogin ? (
                  <span className="loader border-2 border-white border-t-transparent w-5 h-5 rounded-full animate-spin inline-block"></span>
                ) : (
                  "Login"
                )}
              </button>

              <p className="text-gray-500 text-xs">
                Don’t have an account?{" "}
                <a
                  className="underline text-blue-500 cursor-pointer"
                  onClick={(e) => {
                    setUser("unauthorised");
                    e.preventDefault();
                  }}
                >
                  Click here to create account
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Right side image */}
        <div>
          {user === "unauthorised" ? (
            <img className="md:h-[400px]" src={assets.signin} alt="signin" />
          ) : (
            <img className="md:h-[400px]" src={assets.login} alt="login" />
          )}
        </div>
      </div>
    </div>
  );
}

export default UserAuth;
