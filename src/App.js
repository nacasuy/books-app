import "./App.css";
import { createContext, useEffect, useState } from "react";

import Dashboard from "./dashboard/Dashboard";

export const DashboardContext = createContext();

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./data/books.json");
        const json = await res.json();
        setBooks(json);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardContext.Provider value={books}>
      <Dashboard />
    </DashboardContext.Provider>
  );
}

export default App;
