import React, { useState } from "react";
import useCourseStore from "../courseStore";

function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");

  console.log("CourseForm Rendered");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please add a course title");

    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
      completed: false,
    });

    setCourseTitle(""); // reset input
  };

  return (
    <div className="form-container">
      <input
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        className="form-input"
        placeholder="Enter course title"
      />

      <button
        onClick={handleCourseSubmit}
        className="form-submit-btn"
      >
        Add Course
      </button>
    </div>
  );
}

export default CourseForm;
