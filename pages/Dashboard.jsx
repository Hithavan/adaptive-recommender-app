import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const allProjects = [
  { title: "Portfolio Website", level: "Beginner", tag: "Frontend Development" },
  { title: "Titanic ML Model", level: "Intermediate", tag: "AI & ML" },
  { title: "Figma to Code Challenge", level: "Beginner", tag: "UI/UX Design" },
  { title: "Data Visualization Dashboard", level: "Advanced", tag: "Data Science" },
];

export default function Dashboard() {
  const { userProfile } = useContext(AppContext);
  const { level, interest } = userProfile;

  const matchedProjects = allProjects.filter(
    (proj) =>
      proj.level.toLowerCase() === level?.toLowerCase() &&
      proj.tag.toLowerCase() === interest?.toLowerCase()
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Recommended Projects for {userProfile.name}</h2>
      {matchedProjects.length ? (
        <div className="grid gap-4">
          {matchedProjects.map((proj, i) => (
            <div key={i} className="border p-4 rounded shadow">
              <h3 className="font-semibold text-lg">{proj.title}</h3>
              <p className="text-sm text-gray-600">
                Level: {proj.level} | Tag: {proj.tag}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No exact matches found. Try different skill or interest in the future!</p>
      )}
      <Link to="/path" className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded">
        View Learning Path
      </Link>
    </div>
  );
}
