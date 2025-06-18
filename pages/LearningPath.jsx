import React from "react";

const pathSteps = [
  "Understand HTML/CSS Basics",
  "Learn JavaScript and DOM Manipulation",
  "Build a Responsive Portfolio",
  "Practice with React.js",
];

export default function LearningPath() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Learning Path</h2>
      <ol className="list-decimal pl-6 space-y-2">
        {pathSteps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
