import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./user/components/nav";
import Features from "./user/components/about";
import Header from "./user/components/header";
import { useAppContext } from "./context/appcontext";
import FeaturesSection from "./user/components/features";
import Footer from "./user/components/footer";
import Auth from "./authentication/user_auth/auth";

function App() {
  const { appMode } = useAppContext();

  return (
    <>
      <div className={`${!appMode ? "bg-gray-100/1.5" : "bg-neutral-900"}`}>
        <div className="p-2 w-[90vw] mx-auto">
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
            <Route path="/authentication" element={<Auth />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
