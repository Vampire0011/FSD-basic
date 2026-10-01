/*
question 4: Develop a Student Profile
Dashboard
using React
functional
components,
props, state, and Hooks.
*/
import React, { useState } from "react";

const Student = ({ name, course }) => (
  <h2>{name} - {course}</h2>
);

export default function App() {
  const [marks, setMarks] = useState(80);

  return (
    <div>
      <h1>Student Profile Dashboard</h1>

      <Student name="Shashank Patel" course="B.Tech IT" />

      <p>Marks: {marks}</p>

      <button onClick={() => setMarks(marks + 5)}>
        Increase Marks
      </button>
    </div>
  );
}