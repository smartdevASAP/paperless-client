import React from "react";
import { assets } from "../../assets/assets_config";
import { useAppContext } from "../../context/appcontext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function UserAuth() {
  //consuming the context
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
  //setting local state & user related functions
  const [userStatus, setUserStatus] = useState(false);
  //setting default state when the component mounts
  useEffect(() => {
    setAppMode(false);
    setUserStatus(false);
  }, []);
  //checking the credentials on development
  //creating acc
  const navigate = useNavigate();
  const creatingAcc = async () => {
    const env = "development";
    if (env === "development") {
      console.log("user creating account....");
      console.log({ username, userEmail, userPassword });
    }

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
    }
  };

  const loggingIn = () => {
    console.log("user logging in....");
    console.log({ userEmail, userPassword });
  };
  //forgot password
  const forgotPassword = () => {
    window.alert("Cannot change password please try again later");
  };
  return (
    <div className="p-2  md:p-4">
      <Link to="/">
        <img src={assets.logo} alt="" />
      </Link>
      <div className="md:flex p-2 w-[90vw] mx-auto space-y-4 mt-12 justify-between">
        <div>
          {user === "unauthorised" ? (
            <div>
              {/* fields */}
              <h1 className="font-gray-700 font-bold text-gray-600 md:text-xl text-2xl">
                Create A Paperless Account
              </h1>
              <p className="text-xs text-gray-500  mt-4 mb-8">
                Welcome to Paperless 👋Your documents are safe,secure,and just a
                click away.
              </p>
              <div className="w-full">
                <div>
                  <p className="text-sm text-gray-500 ">username</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="block mb-6 w-full text-gray-400 border-1 rounded-xs p-2 border-gray-200"
                    type="text"
                    placeholder="Charity"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 ">email</p>
                  <input
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="block mb-6 w-full text-gray-400 border-1 rounded-xs p-2 border-gray-200"
                    type="text"
                    placeholder="charity@gmail.ai"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 ">password</p>
                  <input
                    onChange={(e) => setUserPassword(e.target.value)}
                    className="block mb-6 w-full text-gray-400 border-1 rounded-xs p-2 border-gray-200"
                    type="text"
                    placeholder="***********"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  creatingAcc();
                }}
                className="p-2 w-full bg-blue-500 mt-8 mb-8 rounded-sm shadow-sm text-white text-center"
              >
                create account
              </button>

              <p className="text-gray-500 text-xs">
                Already have an account{" "}
                <a
                  className="underline text-blue-500"
                  onClick={(e) => {
                    setUser("authorised");
                    e.preventDefault();
                  }}
                  href="#"
                >
                  click here to log in
                </a>{" "}
              </p>
            </div>
          ) : (
            <div>
              {/* login fields */}
              <h1 className="font-gray-700 font-bold text-gray-600 md:text-xl text-2xl">
                Hello👋 and welcome back to paperless
              </h1>
              <p className="text-xs text-gray-500  mt-4 mb-8">
                Welcome back to Paperless 👋Your documents are safe, secure, and
                just a click away.
              </p>
              {/* container for all inputs fields */}
              <div>
                <div>
                  <p className="text-sm text-gray-500 ">email</p>
                  <input
                    onChange={(e) => setUserPassword(e.target.value)}
                    className="block mb-6 w-full text-gray-400 border-1 rounded-xs p-2 border-gray-200"
                    type="text"
                    placeholder="***********"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 ">password</p>
                  <input
                    onChange={(e) => setUserPassword(e.target.value)}
                    className="block mb-6 w-full text-gray-400 border-1 rounded-xs p-2 border-gray-200"
                    type="text"
                    placeholder="***********"
                  />
                </div>
                <div className="flex justify-between">
                  <div />
                  <p
                    className="text-xs hover:cursor-pointer text-gray-600"
                    onClick={() => forgotPassword()}
                  >
                    Forgot password?
                  </p>
                </div>
              </div>
              <Link to="/user-dashboard">
                <button
                  onClick={() => loggingIn()}
                  className="p-2 w-full bg-blue-500 mt-8 mb-8 rounded-sm shadow-sm text-white text-center"
                >
                  Login
                </button>
              </Link>
              <p className="text-gray-500 text-xs">
                I Dont have an account{" "}
                <a
                  className="underline text-blue-500"
                  onClick={(e) => {
                    setUser("unauthorised");
                    e.preventDefault();
                  }}
                  href="#"
                >
                  click here to Create account
                </a>{" "}
              </p>
            </div>
          )}
        </div>
        <div>
          {user === "unauthorised" ? (
            <img className="md:h-[400px]" src={assets.signin} alt="" />
          ) : (
            <img className="md:h-[400px]" src={assets.login} alt="" />
          )}
        </div>
      </div>
    </div>
  );
}

export default UserAuth;
