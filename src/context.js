import React from "react";
import { data } from "./data";
import { useState, useContext } from "react";

const AppContext = React.createContext();

function AppProvider(props) {
  const [appData, setAppData] = useState(data.slice(0, 9));
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [fullTime, setFullTime] = useState(false);
  const [showLoadButton, setShowLoadButton] = useState(true);
  const [applyJobID, setApplyJobID] = useState("");
  const [showApplyPage, setShowApplyPage] = useState(false);

  document.body.className = darkMode ? "dark-theme" : "";

  function toHomePage() {
    setAppData(data.slice(0, 9));
    setShowApplyPage(false);
    setShowLoadButton(true);
    document.body.scrollIntoView();
  }

  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        darkMode,
        setDarkMode,
        fullTime,
        setFullTime,
        showLoadButton,
        setShowLoadButton,
        applyJobID,
        setApplyJobID,
        showApplyPage,
        setShowApplyPage,
        toHomePage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;

export function useGlobalContext() {
  return useContext(AppContext);
}
