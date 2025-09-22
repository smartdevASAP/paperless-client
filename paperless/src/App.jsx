import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./user/components/nav";
import Features from "./user/components/about";
import Header from "./user/components/header";
import { useAppContext } from "./context/appcontext";
import FeaturesSection from "./user/components/features";
import Footer from "./user/components/footer";
import UserAuth from "./authentication/user_auth/userAuth";
import Layout from "./dashboards/user_dashboard/layout";
//toasts
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { appMode } = useAppContext();

  return (
    <>
      {/* your routes/components */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className={`${!appMode ? "bg-gray-100/1.5" : "bg-neutral-900"}`}>
        <div className="">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Nav />
                  <Header />
                  <Features />
                  <FeaturesSection />
                  <Footer />
                </>
              }
            />
            <Route path="/authentication" element={<UserAuth />} />
            <Route path="/user-dashboard/*" element={<Layout />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
