import React from "react";
import Nav from "./user/components/nav";
import Header from "./user/components/header";
import { AppContext, useAppContext } from "./context/appcontext";
function App() {
  const { appMode, setAppMode } = useAppContext();
  return (
    <div className={`${!appMode ? "bg-gray-100/1.5" : "bg-zinc-900"}`}>
      <div className="p-2  w-[90vw] mx-auto">
        <Nav />
        <Header />
      </div>
    </div>
  );
}

export default App;
