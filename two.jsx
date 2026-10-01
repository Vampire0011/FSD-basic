/*
A college requires an online course registration portal where students can register for courses with input
validation
and
seamless
navigation.
Develop the frontend using React Router, controlled components,
form
validation,
and
API
integration.

*/

import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const register = e => {
    e.preventDefault();
    if (!name || !course) return alert("Fill all fields");

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ name, course }),
      headers: { "Content-Type": "application/json" }
    }).then(() => alert("Registered!"));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <form onSubmit={register}>
            <h2>Course Registration</h2>
            <input placeholder="Name" onChange={e => setName(e.target.value)} />
            <select onChange={e => setCourse(e.target.value)}>
              <option value="">Course</option>
              <option>Java</option><option>React</option>
            </select>
            <button>Register</button>
            <br /><Link to="/courses">Courses</Link>
          </form>
        } />
        <Route path="/courses" element={<h2>Java | React</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;