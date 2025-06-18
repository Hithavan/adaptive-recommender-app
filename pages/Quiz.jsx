import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const questions = [
  {
    key: "level",
    question: "What is your current level of experience?",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    key: "interest",
    question: "Which area interests you most?",
    options: ["Frontend Development", "Data Science", "UI/UX Design", "AI & ML"],
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const { setUserProfile } = useContext(AppContext);

  const handleSelect = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setUserProfile((prev) => ({ ...prev, ...answers }));
      navigate("/dashboard");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Skill Assessment</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-6">
          <p className="mb-2 font-medium">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  id={`q${i}opt${idx}`}
                  name={q.key}
                  value={opt}
                  onChange={() => handleSelect(q.key, opt)}
                />
                <label htmlFor={`q${i}opt${idx}`} className="ml-2">
                  {opt}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
        See Recommendations
      </button>
    </div>
  );
}
