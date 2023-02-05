import { Routes, Route } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import Persons from "./pages/persons/Persons"

import './App.css'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="persons" element={<Persons />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;