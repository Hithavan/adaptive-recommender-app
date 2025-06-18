import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Dashboard from "./pages/Dashboard";
import LearningPath from "./pages/LearningPath";

export const AppContext = React.createContext();

export default function App() {
  const [userProfile, setUserProfile] = React.useState({});

  return (
    <AppContext.Provider value={{ userProfile, setUserProfile }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/path" element={<LearningPath />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}
