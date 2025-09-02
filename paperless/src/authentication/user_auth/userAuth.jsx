import React from "react";
import { assets } from "../../assets/assets_config";
import { useAppContext } from "../../context/appcontext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function UserAuth() {
  //consuming the context
  const {
    appMode,
    setAppMode,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
  } = useAppContext();
  //setting local state & user related functions
  const [userStatus, setUserStatus] = useState(false);

  //setting default state when the component mounts
  useEffect(() => {
    setAppMode(false);
    setUserStatus(false);
  }, []);

  const inputs = [
    {
      _id: 0,
      p: "email",
      type: "email",
      placeholder: "email@email.ai",
      handler: setUserEmail,
    },
    {
      _id: 1,
      p: "password",
      type: "password",
      placeholder: "******",
      handler: setUserPassword,
    },
    {
      _id: 2,
      p: "confirm password",
      type: "password",
      placeholder: "******",
      handler: setUserPassword,
    },
  ];
  return (
    <div className="p-2 md:p-4">
      <Link to="/">
        <img src={assets.logo} alt="" />
      </Link>
      <div className="md:flex space-y-4 mt-12 justify-between">
        <div>
          {/* fields */}
          <h1 className="font-gray-700 font-bold text-gray-600 md:text-xl text-2xl">
            Create A Paperless Account
          </h1>
          <p className="text-xs text-gray-500  mt-4 mb-8">
            Welcome to Paperless 👋Your documents are safe,secure,and just a
            click away.
          </p>
          <div className="flex gap-2 md:justify-between">
            <div>
              <p className="text-sm text-gray-500 ">first name</p>
              <input
                className="block mb-6 w-full text-gray-400 border-1 rounded-xs p-2 border-gray-200"
                type="text"
                placeholder="Charity"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 ">Last name</p>
              <input
                className="block mb-6 border-1 w-full text-gray-400 rounded-xs p-2 border-gray-200"
                type="text"
                placeholder="Wangithi"
              />
            </div>
          </div>
          {inputs.map((item) => {
            return (
              <div>
                <p className="text-sm text-gray-500 ">{item.p}</p>
                <input
                  className="block mb-6 border-1 text-gray-400 rounded-xs w-full p-2 border-gray-200"
                  key={item._id}
                  type={item.type}
                  placeholder={item.placeholder}
                />
              </div>
            );
          })}
        </div>
        <div>
          <img className="md:h-[400px]" src={assets.signin} alt="" />
        </div>
      </div>
    </div>
  );
}

export default UserAuth;
