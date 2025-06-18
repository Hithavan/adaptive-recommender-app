import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export default function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { setUserProfile } = useContext(AppContext);

  const handleLogin = () => {
    if (name.trim()) {
      setUserProfile((prev) => ({ ...prev, name }));
      navigate("/quiz");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to LearnPath</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Start Quiz
      </button>
    </div>
  );
}
